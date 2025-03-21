import { WelcomeScene } from './scenes/welcome.js'
import { GameScene } from './scenes/game.js';
import { GameOverScene } from './scenes/gameOver.js';

// Configurações do jogo Phaser
const config = {
    type: Phaser.AUTO,
    width: 850, // Largura da tela do jogo
    height: 700, // Altura da tela do jogo

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    // Ativando a física no jogo
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 }, // Gravidade no eixo y
            debug: false
        }
    },

    // Definindo as cenas do jogo
    scene: [WelcomeScene, GameScene, GameOverScene]
};

// Carrega as configurações do Phaser 
const game = new Phaser.Game(config);