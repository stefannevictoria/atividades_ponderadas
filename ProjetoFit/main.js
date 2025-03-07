import { WelcomeScene } from './scenes/welcome.js'
import { GameScene } from './scenes/game.js';
import { GameOverScene1 } from './scenes/gameOver1.js';
import { GameOverScene2 } from './scenes/gameOver2.js';

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

    scene: [WelcomeScene, GameScene, GameOverScene1]
};

// Carrega as configurações do Phaser 
const game = new Phaser.Game(config);