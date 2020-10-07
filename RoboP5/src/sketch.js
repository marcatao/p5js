//imganes
let backgroundImage;
let imagemRobo;
let imagemBalao;

//analise e resposta
let numeroPergunta = 0;
let caixaResposta;

let texto = ["Seja bem vindo Marcatron\n "+
            "Para adivinhar seu nome \n " +
            "responda minhas perguntas \n "+
            "com frases longas \n " +
            "Clique na tela para começar",

            "Qual o seu livro \n favorito?"
            ];

function preload(){
  backgroundImage = loadImage('assets/img/fundo.png')
  imagemRobo = loadImage('assets/img/robo.png')
  imagemBalao = loadImage('assets/img/balao.png')
}

function setup() {
  createCanvas(500,400)
  caixaResposta = createInput();
}

function draw() {
  background(backgroundImage);
  image(imagemRobo, 130,220,150,150)  
  image(imagemBalao, 50,40,300,200)
  textSize(15);
  textAlign(CENTER);
  text(texto[numeroPergunta], 190, 80)
}

function mousePressed(){
  numeroPergunta++;
  exibirCaixaResposta();
}

function exibirCaixaResposta(){
  caixaResposta.position(80,360);
  caixaResposta.site(450,20);
}