let naveEspacial;
let imagemAlien = new Array(); 
let imagemMissil;
let posicaoMissil = new Array();
let posicaoNave;
let posicaoAliens = new Array();
let alienVivo =true;
let pontuacao = 0
let tamnhoAlien = 5;
let alienDirecao = true;
let velocidadeAlien = 5;
let mySound;


function preload(){
   
    soundFormats('mp3', 'ogg');
    mySound = loadSound('../assets/sounds/Trilha.mp3');

    naveEspacial = loadImage('../assets/img/Nave.png');
    imagemAlien[0] = loadImage('../assets/img/Alien1.png');
    imagemAlien[1] = loadImage('../assets/img/Alien2.png');
    imagemAlien[2] = loadImage('../assets/img/Alien3.png');

    imagemMissil = loadImage('../assets/img/Missil.png');

    posicaoNave = createVector();
    posicaoAlien = createVector();

    posicaoNave.x =  mouseX-(naveEspacial.width/2);
    posicaoNave.y = (windowHeight - (naveEspacial.height * 150));
}

function setup() {
 
    createCanvas(windowWidth, windowHeight);
    mySound.setVolume(0.5);
    mySound.play();

    criarAlien();
}

function draw() {
    movimentarAlien();
    background(100);
    desenharAlien();
    colisaoAlien();

    posicaoNave.x =  mouseX-(naveEspacial.width/2);
    image(naveEspacial, posicaoNave.x, posicaoNave.y, setSize(8),setSize(8));
    
    desenhaMisseis();
    
    fill(250);
    textSize(25);
    text("Score: " + pontuacao, windowWidth * 0.01 , windowHeight * 0.05);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, 50, 50);
}

function setSize(val){
    return windowWidth * (val / 100);
}

function mousePressed(){
   criarPosicoes();
} 

function colisaoAlien(){
  if(posicaoMissil){
    posicaoMissil.forEach(function (item, i) {
        if(verificaColisaoAlien(item, i)){
            console.log('apagar missil:'+i)
            posicaoMissil.slice(i);
        } 
    });
  }
}

function verificaColisaoAlien(item, item_i){
    if(posicaoAliens){
        posicaoAliens.forEach(function (alien, i){
            if (!(item.x > alien[0].x + setSize(tamnhoAlien) ||
            item.x + setSize(1) < alien[0].x ||
            item.y > alien[0].y + setSize(tamnhoAlien) ||
            item.y + setSize(2) < alien[0].y)) {
                posicaoAliens.splice(i,1);
                posicaoMissil.splice(item_i,1)
                pontuacao += 10;
            }
        });
    }
}


function criarAlien(){

    for(let i=0 ; i < 4; i++){
        let fantasia = Math.floor(Math.random() * Math.floor(3))
        posicaoAliens.push([createVector((windowHeight*0.15)*i, (windowHeight*0.10)),fantasia]);
    }
}
function desenharAlien(){
    posicaoAliens.forEach(function (item, i) {
        image(imagemAlien[item[1]], item[0].x, item[0].y, setSize(tamnhoAlien), setSize(tamnhoAlien));
    });
}



function movimentarAlien(){
    posicaoAliens.forEach(function (item, i) { 
          if((item[0].x + setSize(tamnhoAlien)) >= windowWidth) alienDirecao = false;
          if(item[0].x < 0) alienDirecao = true;
             if(alienDirecao){
                item[0].x +=velocidadeAlien;
             }else{
               item[0].x -=velocidadeAlien;
             }    
    });
    
}

function criarPosicoes(){
    posicaoMissil.push(createVector((((posicaoNave.x+(naveEspacial.width/2))) - (setSize(1)/2)), posicaoNave.y));
}

function desenhaMisseis(){
    posicaoMissil.forEach(function (item, i) {
        image(imagemMissil, item.x, item.y ,setSize(1),setSize(2)); 
        posicaoMissil[i].y -= 4;
        if(posicaoMissil[i].y <= 0) posicaoMissil.splice(i,1);
    });
}