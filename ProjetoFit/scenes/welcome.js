export class WelcomeScene extends Phaser.Scene {

    constructor () {
        super ("WelcomeScene")
    }

    // Carrega as imagens
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
    
    // Cria elementos na tela do jogo
    create () {
        this.larguraJogo = this.sys.game.config.width;  // Usando a configuração do Phaser em que determinamos a largura
        this.alturaJogo = this.sys.game.config.height;  // Usando a configuração do Phaser em que determinamos a altura

        // Adiciona a imagem de fundo, determinando sua altura e largura como metade da altura e largura determinadas anteriormente
        this.fundo = this.add.image(this.larguraJogo/2, this.alturaJogo/2, 'fundo');
        this.add.image(this.larguraJogo/2, 100, 'titulo'); // Adiciona o título
        this.add.image(this.larguraJogo/2, 190, 'inicio').setScale(0.6); // Adiciona o texto
        this.add.image(this.larguraJogo/2, 350, 'jeniffer').setScale(0.8); // Adiciona a menina

        this.settings = this.add.image(this.larguraJogo/2, this.alturaJogo/2, 'fundoSett').setScale(0.7).setVisible(false);  // Adiciona a imagem de "como jogar", a deixando invisível

        this.botaoVoltar = this.add.image(700, 100, 'back').setScale(0.6).setVisible(false).setInteractive(); // Adiciona o botão de voltar para a tela de início

        this.botaoConfig = this.add.image(500, 560, "settings").setScale(0.8).setInteractive(); // Adiciona o botão de "como jogar"

        this.botaoJogar = this.add.image(300, 560, "play").setScale(0.8).setInteractive(); // Adiciona o botão de play

        // Define o cursor para "pointer" quando o mouse está sobre o botão de como jogar
        this.botaoConfig.on("pointerover", () => {
            this.input.setDefaultCursor("pointer");
        });
        // Restaura o cursor padrão quando o mouse sai do botão de como jogar
        this.botaoConfig.on("pointerout", () => {
            this.input.setDefaultCursor("default");
        });

        // Muda para a tela de como jogar
        this.botaoConfig.on("pointerdown", () => {
            this.settings.setVisible(true);
            this.botaoConfig.setVisible(false);
            this.botaoJogar.setVisible(false);
            this.fundo.setVisible(false);
            this.botaoVoltar.setVisible(true);
        })

        // Define o cursor para "pointer" quando o mouse está sobre o botão de voltar
        this.botaoVoltar.on("pointerover", () => {
            this.input.setDefaultCursor("pointer");
        });
        // Restaura o cursor padrão quando o mouse sai do botão de voltar
        this.botaoVoltar.on("pointerout", () => {
            this.input.setDefaultCursor("default");
        });

        // Volta para a tela de início
        this.botaoVoltar.on("pointerdown", () => {
            this.settings.setVisible(false);
            this.botaoConfig.setVisible(true);
            this.botaoJogar.setVisible(true);
            this.fundo.setVisible(true);
            this.botaoVoltar.setVisible(false); // Esconde o botão de voltar
        })

        // Define o cursor para "pointer" quando o mouse está sobre o botão de jogar ("play")
        this.botaoJogar.on("pointerover", () => {
            this.input.setDefaultCursor("pointer");
        });
        // Restaura o cursor padrão quando o mouse sai do botão de jogar
        this.botaoJogar.on("pointerout", () => {
            this.input.setDefaultCursor("default");
        });

        // Inicia o jogo ao clicar no botão de jogar
        this.botaoJogar.on("pointerdown", () => {
            this.scene.start("GameScene"); // Troca para a cena principal
        })

        
    }

    update() {

    }

}