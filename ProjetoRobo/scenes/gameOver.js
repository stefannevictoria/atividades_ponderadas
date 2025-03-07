export class GameOverScene extends Phaser.Scene {

    constructor () {
        super ("GameOverScene")
    }

    preload () {
        this.preload.image('fundo', 'assets')
    }
}