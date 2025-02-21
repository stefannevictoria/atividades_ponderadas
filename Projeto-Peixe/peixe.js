var config = {
    type: Phaser.AUTO,
    width: 800, // Largura da tela do jogo
    height: 600, // Altura da tela do jogo

    scene: {  // Define as funções principais do jogo
        preload: preload, // Carrega os arquivos antes do jogo iniciar 
        create: create, // Cria os elemntos na tela
        update: update // Atualiza o jogo
    }
};

var game = new Phaser.Game(config)

// Variáveis para armazenar elementos do jogo
var peixinho; // Variável para o peixe
var musica; // Variável para a música

// Carrega os arquivos
function preload() {
    this.load.image('mar', 'assets/bg_azul-claro.png'); // Carrega a imagem de fundo
    this.load.image('logo', 'assets/logo-inteli_azul.png'); // Carrega a logo do Inteli
    this.load.image('peixe', 'assets/peixes/carpa.png'); // Carrega a imagem do peixe
    this.load.audio('musica', 'assets/musica.mp3'); // Carrega a música
} 

// Adiciona os elementos na tela
function create() {
    this.add.image(400, 300, 'mar'); // Adiciona o fundo
    this.add.image(400, 525, 'logo').setScale(0.4); // Adiciona a logo
    peixinho = this.add.image(400,300, 'peixe'); // Adiciona o peixe
        peixinho.setOrigin(0.5,0.5);
        peixinho.setFlip(true,false);
        peixinho.setScale(0.7); // Reduz o tamanho do peixe

    // Adiciona e toca a música em loop 
    musica = this.sound.add('musica');
        musica.play();

        //adicionar texto na tela
    this.add.text(250, 50, 'Continue a nadar', {
        fontSize: '32px',
        color: '#000080',
        fontFamily: 'Gloria Hallelujah',
        fontStyle: 'bold italic'

    });
}

// Atualiza a posição do peixe de acordo com o mouse
function update() {
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}

