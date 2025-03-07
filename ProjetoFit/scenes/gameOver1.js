export class GameOverScene1 extends Phaser.Scene {

    constructor () {
        super ("GameOverScene1")
    }

    preload () {
        this.load.image('fundo', 'assets/fundoAlt.png');
        this.load.image('jeniffer', 'assets/jeniffer.png');
        this.load.image('ganhou', 'assets/textos/ganhou.png');
        this.load.image('restart', 'assets/botoes/restart.png');
        this.load.image('menu', 'assets/botoes/menu.png');
    }

    create () {
        this.larguraJogo = this.sys.game.config.width;  // Usando a configuração do Phaser
        this.alturaJogo = this.sys.game.config.height;  // Usando a configuração do Phaser

        this.add.image(this.larguraJogo/2, this.alturaJogo/2, 'fundo');
        this.add.image(this.larguraJogo/2, 320, 'jeniffer');
        this.add.image(this.larguraJogo/2, 120, 'ganhou').setScale(0.6);

        this.botaoReiniciar = this.add.image(550, 560, 'restart').setScale(0.6).setInteractive();

        this.botaoReiniciar.on("pointerover", () => {
            this.input.setDefaultCursor("pointer");
        });
        
        this.botaoReiniciar.on("pointerout", () => {
            this.input.setDefaultCursor("default");
        });

        this.botaoReiniciar.on("pointerdown", () => {
            this.scene.start("GameScene")
        })

        this.botaoMenu = this.add.image(300, 560, 'menu').setScale(0.8).setInteractive();

        this.botaoMenu.on("pointerover", () => {
            this.input.setDefaultCursor("pointer");
        });
        
        this.botaoMenu.on("pointerout", () => {
            this.input.setDefaultCursor("default");
        });

        this.botaoMenu.on("pointerdown", () => {
            this.scene.start("WelcomeScene")
        });
    }
}