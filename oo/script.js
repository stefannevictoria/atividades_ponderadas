// POO no código:
// O jogo utiliza conceitos de POO como as classes, que representam as diferentes cenas do jogo
// As classes herdam da classe Phaser.Scene, o que mostra a herança
// As classes estendem Phaser.Scene, isto é, herdam as funcionalidades do Phaser
// Os atributos das classes estão encapsulados, sendo acessíveis apenas para métodos apropriados

// Alterações feitas: 
// - Comentários explicando o código
// - GameScene2 apresenta 2 inimigos que podem levar ao Game Over. Além disso, 
// - Para completar a fase do GameScene2 é necessário coletar 5 chaves, dispostas de maneira aleatória na tela, sem colidir com os inimigos.
// - Adicição de um texto na GameScene2 explicando o que deveria ser feito para completar aquela fase.
// - Alteração do background da WinScene. 


class MenuScene extends Phaser.Scene {
    constructor() {
        super("MenuScene");
    }

    // Carrega as imagens que serão utilizadas 
    preload() {
        this.load.image('startButton', 'assets/start.png'); 
        this.load.image('backgroundMenu', 'assets/background_menu.png');
    }

    create() {
        this.add.image(400, 300, 'backgroundMenu'); // Adiciona a imagem de fundo
        this.add.text(250, 100, "Jogo do Labirinto", { fontSize: "48px", fill: "#fff" }); // Adiciona o texto
        let startButton = this.add.image(400, 400, 'startButton').setInteractive(); // Adiciona o botão de iniciar o jogo, tornando-o interativo
        startButton.on('pointerdown', () => {
            this.scene.start('GameScene'); // Troca para a cena do jogo
        });
    }
}

class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
        // Inicializa as variáveis para a pontuação e para a chave
        this.score = 0; 
        this.hasKey = false; 
    }

    // Carrega as imagens e recursos que serão utilizados 
    preload() {
        this.load.image('player', 'assets/player.png');
        this.load.image('key', 'assets/key.png');
        this.load.image('enemy', 'assets/enemy.png');
        this.load.image('door', 'assets/door.png');
        this.load.tilemapTiledJSON('map', 'assets/map.json');
        this.load.image('tiles', 'assets/tileset.png');
        this.load.image('backgroundGame', 'assets/background_game.png');
    }

    create() {
        this.add.image(400, 300, 'backgroundGame'); // Adiciona o fundo

        // Cria o mapa do jogo
        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage("tileset", "tiles");
        map.createLayer("Ground", tileset, 0, 0);
        
        // Adiciona o jogador 
        this.player = this.physics.add.sprite(100, 100, 'player');
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(0.2);
        
        this.spawnKey(); // Adiciona a chave

        // Adiciona a porta
        this.door = this.physics.add.sprite(500, 200, 'door'); 
        this.physics.add.overlap(this.player, this.door, this.enterDoor, null, this);
        
        // Adiciona o inimigo
        this.enemy = this.physics.add.sprite(400, 200, 'enemy');
        this.enemy.setVelocity(100, 100); // Define a velocidade
        this.enemy.setBounce(1, 1);
        this.enemy.setCollideWorldBounds(true); // Adiciona os limites da tela

        // Adiciona o placar
        this.scoreText = this.add.text(16, 16, 'Placar: 0', { fontSize: '32px', fill: '#fff' });

        // Configura colisões entre o jogador e os elementos do jogo
        this.physics.add.overlap(this.player, this.keyItem, this.collectKey, null, this);
        this.physics.add.overlap(this.player, this.enemy, () => {
            this.scene.start('GameOverScene'); // Muda para a cena de Game Over caso o jogador colida com o inimigo
        });

        // Adiciona os controles do teclado
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // Resetar velocidade antes de aplicar novas direções
        this.player.setVelocity(0);

        if (this.cursors.left.isDown) { // Movimento para a esquerda
            this.player.setVelocityX(-160); // Define a velocidade
        } else if (this.cursors.right.isDown) { // Movimento para a direita
            this.player.setVelocityX(160); // Define a velocidade
        }

        if (this.cursors.up.isDown) { // Movimento para cima
            this.player.setVelocityY(-160); // Define a velocidade
        } else if (this.cursors.down.isDown) { // Movimento para baixo
            this.player.setVelocityY(160); // Define a velocidade
        }
    }

    spawnKey() {
        if (this.keyItem) {
            this.keyItem.destroy();
        }

        // Define uma posição aleatória para a chave
        let x = Phaser.Math.Between(50, 750);
        let y = Phaser.Math.Between(50, 550);
        this.keyItem = this.physics.add.sprite(x, y, 'key');
        this.physics.add.overlap(this.player, this.keyItem, this.collectKey, null, this);
        this.hasKey = false;
    }

    collectKey(player, key) {
        // Coleta a chave e aumenta o placar
        this.score += 10;
        this.scoreText.setText('Placar: ' + this.score);
        key.destroy();
        this.hasKey = true;
    }

    enterDoor(player, door) {
        // Muda para a próxima fase caso o jogador tenha a chave
        if (this.hasKey) {
            this.scene.start('GameScene2');
        }
    }
}

class GameScene2 extends Phaser.Scene {
    constructor() {
        super("GameScene2");
    }

    preload() {
        this.load.tilemapTiledJSON('map2', 'assets/map2.json');
        this.load.image('backgroundGame2', 'assets/background_game2.png');
        this.load.image('key', 'assets/key.png');
        this.load.image('player', 'player.png');
        this.load.image('enemy', 'assets/enemy.png');
    }

    create() {
        this.pontuacao = 0; //Cria a variável pontuação

        this.add.image(400, 300, 'backgroundGame2'); // Adiciona o fundo
        this.add.text(100, 100, "Colete 5 chaves para completar o jogo!", { fontSize: "30px", fill: "#fff" }); // Adiciona o texto

        // Adicionando o player
        this.player = this.physics.add.sprite(100, 100, 'player');
        this.player.setCollideWorldBounds(true); // Adicionando os limites da tela
        this.player.setBounce(0.2);
        
        // Adicionando o inimigo
        this.enemy = this.physics.add.sprite(400, 200, 'enemy');
        this.enemy.setVelocity(170, 170);
        this.enemy.setBounce(1, 1);
        this.enemy.setCollideWorldBounds(true); // Adiciona os limites da tela

        // Cria outro inimigo
        this.enemy = this.physics.add.sprite(120, 200, 'enemy');
        this.enemy.setVelocity(100, 100);
        this.enemy.setBounce(1, 1);
        this.enemy.setCollideWorldBounds(true); // Limites da tela

        // Configura a colisão entre o jogador e o inimigo
        this.physics.add.overlap(this.player, this.enemy, () => { // Identifica o contato entre o inimigo e o player
            this.scene.start('GameOverScene'); // Troca para a cena de Game Over
        });

        //Adicionar os controles do teclado
        this.cursors = this.input.keyboard.createCursorKeys();

        // Adicionando o placar 
        this.placar = this.add.text(16, 16, 'Pontuação: ' + this.placar, {fontSize: '32px', fill: '#fff'});

        // Adicionando a chave (key)
        this.key = this.physics.add.sprite(70, 0, 'key'); 
        this.key.setCollideWorldBounds(true); // Adiciona os limites da tela
        this.key.setScale(0.8); 

        // Quando o player encostar na chave
        this.physics.add.overlap(this.player, this.key, () => {
            this.key.setVisible(false); //a chave fica invisível
            var posicaoKey_Y = Phaser.Math.RND.between(50, 650); //Número sorteado entre 50 e 650
            this.key.setPosition(posicaoKey_Y, 100); //Ajustar a posição da chave de acordo com o número sorteado
            this.pontuacao += 1; //Somar pontuação
            this.placar.setText('Pontuacao: ' + this.pontuacao); //atualiza o placar
            this.key.setVisible(true); //Torna o key visível
        })
    }

    update() {
        // Resetar velocidade antes de aplicar novas direções
        this.player.setVelocity(0);

        if (this.cursors.left.isDown) { // Movimento para a esquerda
            this.player.setVelocityX(-160); // Define a velocidade
        } else if (this.cursors.right.isDown) { // Movimento para a direita
            this.player.setVelocityX(160); // Define a velocidade
        }

        if (this.cursors.up.isDown) { // Movimento para cima
            this.player.setVelocityY(-160); // Define a velocidade
        } else if (this.cursors.down.isDown) { // Movimento para baixo
            this.player.setVelocityY(160); // Define a velocidade
        }

        if (this.pontuacao >= 5) { // Confere se a pontuação chegou a 5
            this.scene.start('WinScene'); // Troca para a cena dos vencedores
        }
    }
}

class GameOverScene extends Phaser.Scene {
    constructor() {
        super("GameOverScene");
    }

    preload() {
        this.load.image('backgroundGameOver', 'assets/background_gameover.png');
    }

    create() {
        this.add.image(400, 300, 'backgroundGameOver'); // Adiciona a imagem de fundo
        this.add.text(300, 100, "Game Over", { fontSize: "48px", fill: "#000000" }); // Adiciona o texto
        
        // Reinicia o jogo ao clicar no botão
        this.input.on('pointerdown', () => {
            this.scene.start('MenuScene'); // Troca para a cena do Menu
        });
    }
}

class WinScene extends Phaser.Scene {
    constructor() {
        super("WinScene");
    }

    preload() {
        this.load.image('backgroundWin', 'assets/background_win.png');
    }

    create() {
        this.add.image(400, 300, 'backgroundWin').setScale(5.0); // Adiciona o fundo
        this.add.text(300, 100, "Você Ganhou!", { fontSize: "48px", fill: "#000000" }); // Adiciona o texto
        
        // Reinicia o jogo ao clicar no botão
        this.input.on('pointerdown', () => {
            this.scene.start('MenuScene'); // Troca para a cena do Menu
        });
    }
}

// Definição das configurações do jogo
const config = {
    type: Phaser.AUTO,
    width: 800, // Largura da tela do jogo
    height: 600, // Altura da tela do jogo
    physics: { default: 'arcade', arcade: { debug: false } }, // Ativando a física do jogo
    scene: [MenuScene, GameScene, GameScene2, GameOverScene, WinScene] // Definindo as cenas do jogo
};

// Carrega as configurações do Phaser
const game = new Phaser.Game(config);