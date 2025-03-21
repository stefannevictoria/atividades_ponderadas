export class GameScene extends Phaser.Scene {
    larguraJogo = 850;
    alturaJogo = 700;
    plataformas = [];

    constructor() {
        super("GameScene");
    }

    preload() { 
        this.load.image('bg', 'assets/background.jpg');
        this.load.image('tomate', 'assets/tomate.png');
        this.load.spritesheet('menina', 'assets/spritesheet_Girl.png', { frameWidth: 149, frameHeight: 270 });
        this.load.image('plataforma', 'assets/alter.png');
        this.load.image('poeira', 'assets/fumaca.png');
        this.load.image('bg2', 'assets/parque.jpeg');
    }

    create() { 
        this.scale.setGameSize(this.larguraJogo, this.alturaJogo);
        this.scale.refresh();
        
        this.pontuacaoTomate = 0;

        if (this.scale.orientation === Phaser.Scale.LANDSCAPE) {
            this.add.image(this.larguraJogo / 2, this.alturaJogo / 2, 'bg')
                .setOrigin(0.5, 0.5)
                .setDisplaySize(this.larguraJogo, this.alturaJogo);
        } else {
            this.add.image(this.larguraJogo / 2, this.alturaJogo / 2, 'bg2')
                .setOrigin(0.5, 0.5)
                .setDisplaySize(this.larguraJogo, this.alturaJogo);
        }

        this.poeira = this.add.sprite(0, 0, 'poeira').setScale(0.25);
        this.poeira.setVisible(false);

        this.player = this.physics.add.sprite(this.larguraJogo / 2, 100, 'menina').setScale(0.6);
        this.player.setCollideWorldBounds(true);
        this.player.body.setGravityY(300);

        this.plataformas[0] = this.physics.add.staticImage(200, 450, 'plataforma').setScale(0.3);
        this.plataformas[0].body.setSize(this.plataformas[0].width * 0.3, this.plataformas[0].height * 0.3).setOffset(0, this.plataformas[0].height * 0.35);

        this.plataformas[1] = this.physics.add.staticImage(580, 360, 'plataforma').setScale(0.3);
        this.plataformas[1].body.setSize(this.plataformas[1].width * 0.3, this.plataformas[1].height * 0.3).setOffset(0, this.plataformas[1].height * 0.35);

        for (let i = 0; i < this.plataformas.length; i++) {
            this.physics.add.collider(this.player, this.plataformas[i]);
        }

        this.cursors = this.input.keyboard.createCursorKeys();

        this.placar = this.add.text(50, 50, 'Pontuacao:' + this.pontuacaoTomate, { fontSize: '45px', fill: '#495613' });

        this.tomate = this.physics.add.sprite(this.larguraJogo / 3, 0, 'tomate').setScale(0.15);
        this.tomate.setCollideWorldBounds(true);
        this.physics.add.collider(this.tomate, this.plataformas[0]);
        this.physics.add.collider(this.tomate, this.plataformas[1]);
        
        this.physics.add.overlap(this.player, this.tomate, () => { 
            this.tomate.setVisible(false);
            var posicaoTomate_Y = Phaser.Math.RND.between(50, 650);
            this.tomate.setPosition(posicaoTomate_Y, 100);
            this.pontuacaoTomate += 1;
            this.placar.setText('Pontuacao: ' + this.pontuacaoTomate);
            this.tomate.setVisible(true);
        });

        this.anims.create({ key: 'direita', frames: this.anims.generateFrameNumbers('menina', { start: 4, end: 7 }), frameRate: 10, repeat: -1 });
        this.anims.create({ key: 'esquerda', frames: this.anims.generateFrameNumbers('menina', { start: 0, end: 2 }), frameRate: 10, repeat: -1 });
        this.anims.create({ key: 'parada', frames: [{ key: 'menina', frame: 3 }], frameRate: 20 });
    }

    update() {
        this.player.setVelocityX(0);
    
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.setFlipX(false);
            if (this.player.anims.currentAnim?.key !== 'esquerda') {
                this.player.anims.play('esquerda', true);
            }
            this.ativarPoeira();
            this.poeira.setFlipX(true);
            this.poeira.setPosition(this.player.x + 30, this.player.y + 50);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            this.player.setFlipX(false);
            if (this.player.anims.currentAnim?.key !== 'direita') {
                this.player.anims.play('direita', true);
            }
            this.ativarPoeira();
            this.poeira.setFlipX(false);
            this.poeira.setPosition(this.player.x - 30, this.player.y + 50);
        } else {
            this.player.setVelocityX(0);
            if (this.player.anims.currentAnim?.key !== 'parada') {
                this.player.anims.play('parada', true);
            }
            this.semPoeira();
        }
    
        if (this.cursors.up.isDown) {
            this.player.setVelocityY(-400);
        }

        if (this.pontuacaoTomate >= 5) {
            this.scene.start("GameOverScene");
        }
    }
    
    ativarPoeira() {
        this.poeira.setVisible(true);
    }

    semPoeira() {
        this.poeira.setVisible(false);
    }
}