export class GameOverScene extends Phaser.Scene {

    constructor () {
        super ("GameOverScene")
    }

    // Carrega as imagens
    preload () {
        this.load.image('fundo', 'assets/fundoAlt.png');
        this.load.image('jeniffer', 'assets/jeniffer.png');
        this.load.image('ganhou', 'assets/textos/ganhou.png');
        this.load.image('restart', 'assets/botoes/restart.png');
        this.load.image('menu', 'assets/botoes/menu.png');
    }

    // Cria elementos na tela do jogo
    create () {
        this.larguraJogo = this.sys.game.config.width;  // Usando a configuração do Phaser em que determinamos a largura
        this.alturaJogo = this.sys.game.config.height;  // Usando a configuração do Phaser em que determinamos a altura

        // Adiciona a imagem de fundo, determinando sua altura e largura como metade da altura e largura determinadas anteriormente
        this.add.image(this.larguraJogo/2, this.alturaJogo/2, 'fundo');
        this.add.image(this.larguraJogo/2, 320, 'jeniffer'); // Adiciona a imagem da menina
        this.add.image(this.larguraJogo/2, 120, 'ganhou').setScale(0.6); // Adiciona o texto

        this.botaoReiniciar = this.add.image(550, 560, 'restart').setScale(0.6).setInteractive(); // Adiciona o botão de reiniciar o jogo

        // Define o cursor para "pointer" quando o mouse está sobre o botão de reiniciar
        this.botaoReiniciar.on("pointerover", () => {
            this.input.setDefaultCursor("pointer");
        });
        
        // Restaura o cursor padrão quando o mouse sai do botão de reiniciar
        this.botaoReiniciar.on("pointerout", () => {
            this.input.setDefaultCursor("default");
        });

        // Reinicia o jogo ao clicar no botão de reiniciar
        this.botaoReiniciar.on("pointerdown", () => {
            this.scene.start("GameScene") // Troca para a cena principal
        })

        // Adiciona o botão de menu
        this.botaoMenu = this.add.image(300, 560, 'menu').setScale(0.8).setInteractive();

        // Define o cursor para "pointer" quando o mouse está sobre o botão de menu
        this.botaoMenu.on("pointerover", () => {
            this.input.setDefaultCursor("pointer");
        });
        
        // Restaura o cursor padrão quando o mouse sai do botão de menu
        this.botaoMenu.on("pointerout", () => {
            this.input.setDefaultCursor("default");
        });

        // Vai para a tela inicial ao clicar no botão de menu
        this.botaoMenu.on("pointerdown", () => {
            this.scene.start("WelcomeScene") // Troca para a tela inicial
        });
    }
}