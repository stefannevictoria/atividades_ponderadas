export class WelcomeScene extends Phaser.Scene {

    constructor () {
        super ("WelcomeScene")
    }

    preload () {
        this.load.image('fundo', 'assets/fundoAlt.png');
        this.load.image('play', 'assets/botoes/play.png');
        this.load.image('settings', 'assets/botoes/how.png');
        this.load.image('jeniffer', 'assets/jeniffer.png');
        this.load.image('titulo', 'assets/textos/titulo.png');
        this.load.image('inicio', 'assets/textos/inicio.png');
    }

    create () {
        this.larguraJogo = this.sys.game.config.width;  // Usando a configuração do Phaser
        this.alturaJogo = this.sys.game.config.height;  // Usando a configuração do Phaser

        this.add.image(this.larguraJogo/2, this.alturaJogo/2, 'fundo');
        this.add.image(this.larguraJogo/2, 100, 'titulo');
        this.add.image(this.larguraJogo/2, 190, 'inicio').setScale(0.6); 
        this.add.image(this.larguraJogo/2, 350, 'jeniffer').setScale(0.8);

        this.add.image(550, 560, 'settings').setScale(0.8);

        this.botaoJogar = this.add.image(300, 560, "play").setScale(0.8).setInteractive();

        this.botaoJogar.on("pointerover", () => {
            this.input.setDefaultCursor("pointer");
        });
        
        this.botaoJogar.on("pointerout", () => {
            this.input.setDefaultCursor("default");
        });

        this.botaoJogar.on("pointerdown", () => {
            this.scene.start("GameScene")
        })
    }

    update() {

    }

}