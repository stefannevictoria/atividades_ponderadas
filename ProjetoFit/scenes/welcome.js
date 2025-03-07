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
        this.load.image('fundoSett', 'assets/fundoSettings.png');
        this.load.image('back', 'assets/botoes/voltar.png');
    }

    create () {
        this.larguraJogo = this.sys.game.config.width;  // Usando a configuração do Phaser
        this.alturaJogo = this.sys.game.config.height;  // Usando a configuração do Phaser

        this.fundo = this.add.image(this.larguraJogo/2, this.alturaJogo/2, 'fundo');
        this.add.image(this.larguraJogo/2, 100, 'titulo');
        this.add.image(this.larguraJogo/2, 190, 'inicio').setScale(0.6); 
        this.add.image(this.larguraJogo/2, 350, 'jeniffer').setScale(0.8);

        this.settings = this.add.image(this.larguraJogo/2, this.alturaJogo/2, 'fundoSett').setScale(0.7).setVisible(false);

        this.botaoVoltar = this.add.image(700, 100, 'back').setScale(0.6).setVisible(false);

        this.botaoConfig = this.add.image(500, 560, "settings").setScale(0.8).setInteractive();

        this.botaoJogar = this.add.image(300, 560, "play").setScale(0.8).setInteractive();

        this.botaoConfig.on("pointerover", () => {
            this.input.setDefaultCursor("pointer");
        });
        
        this.botaoConfig.on("pointerout", () => {
            this.input.setDefaultCursor("default");
        });

        this.botaoConfig.on("pointerdown", () => {
            this.settings.setVisible(true);
            this.botaoConfig.setVisible(false);
            this.botaoJogar.setVisible(false);
            this.fundo.setVisible(false);
            this.botaoVoltar.setVisible(true);
        })

        this.botaoVoltar.on("pointerover", () => {
            this.input.setDefaultCursor("pointer");
        });
        
        this.botaoVoltar.on("pointerout", () => {
            this.input.setDefaultCursor("default");
        });

        this.botaoVoltar.on("pointerdown", () => {
            this.settings.setVisible(false);
            this.botaoConfig.setVisible(true);
            this.botaoJogar.setVisible(true);
            this.fundo.setVisible(true);
            
        })

        this.botaoJogar.on("pointerover", () => {
            this.input.setDefaultCursor("pointer");
        });
        
        this.botaoJogar.on("pointerout", () => {
            this.input.setDefaultCursor("default");
        });

        this.botaoJogar.on("pointerdown", () => {
            this.scene.start("GameScene");
        })

        
    }

    update() {

    }

}