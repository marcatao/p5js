let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let cenario;
let personagem;
let inimigo;

const matrizInimigo = [
    [0, 0],
    [102, 0]
];


function preload() {
    imagemCenario = loadImage('img/background/a1.jpg');
    imagemPersonagem = loadImage('img/personagem/andando/sprite.png');
    imagemInimigo = loadImage('img/inimigo1/andando/sprite.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight - 40);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(imagemPersonagem);
    inimigo = new Inimigo(imagemInimigo);
    frameRate(40);
}

function draw() {
    cenario.exibe();
    cenario.move();
    inimigo.exibe();
    personagem.exibe();


}