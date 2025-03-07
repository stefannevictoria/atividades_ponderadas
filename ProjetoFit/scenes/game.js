//Criar classe "GameScene"
export class GameScene extends Phaser.Scene {

    plataformas = []; //Acrescentar array de plataformas para utilizá-las de maneira dinâmica

    constructor() {
        super("GameScene");
    }


    // Carregar imagens e sprites
    preload() { 
        this.load.image('bg', 'assets/background.jpg');
        this.load.image('tomate', 'assets/tomate.png');
        this.load.spritesheet('menina', 'assets/spritesheet_Girl.png', { frameWidth: 149, frameHeight: 270 });
        this.load.image('plataforma', 'assets/alter.png');
        this.load.image('poeira', 'assets/fumaca.png');
    }


    //Criar elementos da tela do jogo
    create() { 
        this.larguraJogo = this.sys.game.config.width;  // Usando a configuração do Phaser em que determinamos a largura
        this.alturaJogo = this.sys.game.config.height;  // Usando a configuração do Phaser em que determinamos a altura

        //Criar variável pontuação
        this.pontuacaoTomate = 0;

        // Adiciona a imagem de fundo, determinando sua altura e largura como metade da altura e largura determinadas anteriormente
        this.add.image(this.larguraJogo/2, this.alturaJogo/2, 'bg');

        // Adiciona a poeira
        this.poeira = this.add.sprite(0, 0, 'poeira').setScale(0.25);
        this.poeira.setVisible(false); // Controle da visibilidade da imagem da poeira (inicia invisível)

        //Adiciona o sprite da personagem
        this.player = this.physics.add.sprite(this.larguraJogo/2, 100, 'menina').setScale(0.6);
        this.player.setCollideWorldBounds(true); // Adiciona os limites da tela
        this.player.body.setGravityY(300); // Aplica gravidade para garantir que o personagem volte ao chão


        //Adiciona plataformas 1 e 2, dimensão e marcação de colisão
        this.plataformas[0] = this.physics.add.staticImage(200, 450, 'plataforma');
        this.plataformas[0].body.setSize(148, 44, true);
        this.plataformas[0].setScale(0.3);

        this.plataformas[1] = this.physics.add.staticImage(580, 360, 'plataforma');
        this.plataformas[1].body.setSize(148, 44, true);
        this.plataformas[1].setScale(0.3);

        //Adicionar colisão das plataformas do array, começando pela 0
        for (let i = 0; i < this.plataformas.length; i++){
            this.physics.add.collider(this.player, this.plataformas[i]);
        }

        //Adicionar os controles do teclado
        this.cursors = this.input.keyboard.createCursorKeys();

        //Adiciona o placar 
        this.placar = this.add.text(50, 50, 'Pontuacao:' + this.pontuacaoTomate, {fontSize:'45px', fill:'#495613'});

        //Adiciona o tomate
        this.tomate = this.physics.add.sprite(this.larguraJogo/3, 0, 'tomate');
        this.tomate.setCollideWorldBounds(true); // Adiciona os limites da tela
        this.tomate.setScale(0.15);
        this.physics.add.collider(this.tomate, this.plataformas[0]); // Faz com que o tomate não consiga se sobrepor a plataforma, colidindo com ela
        this.physics.add.collider(this.tomate, this.plataformas[1]);
        this.physics.add.collider(this.tomate, this.chao);

        //Quando o player encostar no tomate
        this.physics.add.overlap(this.player, this.tomate, () => { 
            this.tomate.setVisible(false); //o tomate fica invisível
            var posicaoTomate_Y = Phaser.Math.RND.between(50, 650); //Número sorteado entre 50 e 650
            this.tomate.setPosition(posicaoTomate_Y, 100); //Ajustar a posição do tomate de acordo com o número sorteado
            this.pontuacaoTomate += 1; //Somar pontuação
            this.placar.setText('Pontuacao: ' + this.pontuacaoTomate); //atualiza o placar
            this.tomate.setVisible(true); //Torna o tomate visível
        });

        //Animações da personagem
        this.anims.create({
            key: 'direita',
            frames: this.anims.generateFrameNumbers('menina', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'esquerda',
            frames: this.anims.generateFrameNumbers('menina', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'parada',
            frames: [{ key: 'menina', frame: 3 }],
            frameRate: 20
        });

    }


    update() {
        // Resetar velocidade antes de aplicar novas direções
        this.player.setVelocityX(0);
    
        // Movimentação para a esquerda
        if (this.cursors.left.isDown) { // Quando o cursor da seta da esquerda for pressionado
            this.player.setVelocityX(-160); // Define a velocidade
            this.player.setFlipX(false); // Mantém o sprite normal (sem espelhar)
            if (this.player.anims.currentAnim?.key !== 'esquerda') {
                this.player.anims.play('esquerda', true); // Define a animação quando a seta para a esquerda estiver pressionada
            }
            this.ativarPoeira(); // Ativa a poeira
            this.poeira.setFlipX(true); // Espelhando a imagem da poeira
            // Move a poeira para a direita quando se move para a esquerda
            this.poeira.setPosition(this.player.x + 30, this.player.y + 50);
        } 

        // Movimentação para a direita
        else if (this.cursors.right.isDown) { // Quando o cursor da tela da direita for pressionado
            this.player.setVelocityX(160); // Define a velocidade
            this.player.setFlipX(false); // Mantém o sprite normal
            if (this.player.anims.currentAnim?.key !== 'direita') {
                this.player.anims.play('direita', true); // Define a animação quando a seta para a direita estiver pressionada
            }
            this.ativarPoeira(); // Ativa a poeira
            this.poeira.setFlipX(false); // Mantém a imagem da poeira sem espelhar
            // Mover a poeira para a esquerda quando se move para a direita
            this.poeira.setPosition(this.player.x - 30, this.player.y + 50);
        } 

        // Se nenhuma tecla for pressionada, o personagem fica parado
        else {
            this.player.setVelocityX(0); // Velocidade 0
            if (this.player.anims.currentAnim?.key !== 'parada') {
                this.player.anims.play('parada', true); // Define a animação quando nenhuma tecla estiver pressionada
            }
            this.semPoeira(); // Desativa o efeito da poeira
        }
    
        // Movimento para cima
        if (this.cursors.up.isDown) { 
            this.player.setVelocityY(-400); // Define a velocidade
        }

        // Troca de cena caso atinja a pontuação determinada
        if (this.pontuacaoTomate >= 5) { // Verificar se a pontuação do tomate chegou a 5
            this.scene.start("GameOverScene");  // Trocar para a próxima cena
        }

    }
    
    // Adiciona as funções para ativar e desativar o turbo da poeira
    ativarPoeira() {
        this.poeira.setVisible(true); // Poeira visível
    }

    semPoeira() {
        this.poeira.setVisible(true); // Poeira invisível
    }
    
}