import {WelcomeScene} from './scenes/welcome.js'
import { GameScene } from './scenes/game.js';
import { GameOverScene} from './scenes/gameOver.js';

// Configurações do jogo Phaser
const config = {
    type: Phaser.AUTO,
    width: 850,
    height: 700,

    // Ativando a física no jogo
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },

    scene: [WelcomeScene, GameScene, GameOverScene]
};

// Carrega as configurações do Phaser 
const game = new Phaser.Game(config);