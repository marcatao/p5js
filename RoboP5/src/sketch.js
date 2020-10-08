//imganes
let backgroundImage;
let imagemRobo;
let imagemBalao;

//analise e resposta
let numeroPergunta = 0;
let caixaResposta;
let nome ="";

let texto = ["Seja bem vindo Marcatron\n "+
            "Para adivinhar seu nome \n " +
            "responda minhas perguntas \n "+
            "com frases longas \n " +
            "Clique na tela para começar",
            "Qual o seu livro \n favorito?",
            "Qual o seu filme \n favorito?",
            "Qual o sua fruta \n favorita?",
            "Qual o sua cor   \n favorita?"
            ];

function preload(){
  backgroundImage = loadImage('assets/img/fundo.png')
  imagemRobo = loadImage('assets/img/robo.png')
  imagemBalao = loadImage('assets/img/balao.png')
}

function setup() {
  createCanvas(500,400)

}

function draw() {
  background(backgroundImage);
  image(imagemRobo, 130,220,150,150)  
  image(imagemBalao, 50,40,300,200)
  escreveTexto();
}

function escreveTexto(){
  textSize(15);
  textAlign(CENTER);
  let txt = texto[numeroPergunta];
  if(texto.length == numeroPergunta){
     txt = "Seu nome é: " + nome;
     caixaResposta.remove();
  }
  text(txt , 190, 80)

}


function mousePressed(){
  if(numeroPergunta < 1)  exibirCaixaResposta();
  if(numeroPergunta == 0 ) numeroPergunta++;
  if(caixaResposta.value().length > 0){
      numeroPergunta++;
  }
}

function keyPressed(){
  if(keyCode === ENTER){
    decobrirNome();
    
  }
}

function exibirCaixaResposta(){
  caixaResposta = createInput();
  caixaResposta.position(50,350);
  caixaResposta.size(380,30);
  caixaResposta.elt.placeholder = "Responda aqui e precione a tecla ENTER"
}

function decobrirNome(){
  respostaTexto = caixaResposta.value();
  if(caixaResposta.value().length > 0){
    nome += respostaTexto[0];
    console.log(nome);
    numeroPergunta++;
    caixaResposta.value('');
  }
}