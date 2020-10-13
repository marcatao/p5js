let naveEspacial;
let imagemAlien = new Array(); 
let imagemMissil;
let imagemLaser;

let posicaoLasers = new Array();
let chancesDeAtirar = 0.005;
let posicaoMissil = new Array();
let posicaoNave;
let posicaoAliens = new Array();
let alienVivo =true;
let pontuacao = 0
let tamnhoAlien = 5;
let alienDirecao = true;
let velocidadeAlien = 5;
let mySound;
let qtdAliens = 7;
let ganhou = false;
let gameOver = false;

function preload(){
   
    soundFormats('mp3', 'ogg');
    //mySound = loadSound('../assets/sounds/Trilha.mp3');

    naveEspacial = loadImage('../assets/img/Nave.png');
    imagemAlien[0] = loadImage('../assets/img/Alien1.png');
    imagemAlien[1] = loadImage('../assets/img/Alien2.png');
    imagemAlien[2] = loadImage('../assets/img/Alien3.png');
    imagemLaser = loadImage('../assets/img/Laser.png');
    imagemMissil = loadImage('../assets/img/Missil.png');

    posicaoNave = createVector();
    posicaoAlien = createVector();

    posicaoNave.x =  mouseX-(naveEspacial.width/2);
    posicaoNave.y = (windowHeight - (naveEspacial.height * 150));
}

function setup() {
 
    createCanvas(800, 600);
    //mySound.setVolume(0.5);
    //mySound.play();

    criarAlien();
}

function draw() {
    background(65,105,225);
    desenharAlien();

  if((!ganhou) &&(!gameOver) ){  
    movimentarAlien();
    colisaoAlien();
    posicaoNave.x =  mouseX-(naveEspacial.width/2);
    image(naveEspacial, posicaoNave.x, posicaoNave.y, setSize(8),setSize(8));
    desenhaMisseis();
    fill(250);
    textSize(25);
    text("Score: " + pontuacao, windowWidth * 0.01 , windowHeight * 0.05);
    criaLasers();
    colisaoNave();
    if(posicaoAliens.length == 0) ganhou = true; 
  }else{

      
      fill(250);
      textSize(35);
      textAlign(CENTER)
      if(gameOver) text("Game Over", windowWidth /2 , windowHeight /2);
      if(ganhou) text("You Win !!", windowWidth /2 , windowHeight /2); 
  }
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

    for(let i=0 ; i < qtdAliens; i++){
        let fantasia = Math.floor(Math.random() * Math.floor(3))
        posicaoAliens.push([createVector((windowHeight*0.15)*i, (windowHeight*(fantasia/10))),fantasia]);
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

function criaLasers(){
    posicaoAliens.forEach(function (item, i) { 
        if(tentaAtirarLasers())
        posicaoLasers.push(createVector(item[0].x, item[0].y));
    });

    desenhaLasers();
}

function desenhaLasers(){
    posicaoLasers.forEach(function (item, i){
        const metadeAlien = setSize(tamnhoAlien) / 2
        image(imagemLaser,(item.x + metadeAlien),item.y + metadeAlien*2,setSize(0.5) );
        item.y+=velocidadeAlien;
        if(posicaoLasers[i].y > windowHeight) posicaoLasers.splice(i,1);
    });
    console.log(posicaoLasers.length)
}

function tentaAtirarLasers(){
   return Math.random() < chancesDeAtirar ;
}


function colisaoNave(){
      if(posicaoLasers){
        posicaoLasers.forEach(function (item, i){
            laserImg = {width:setSize(0.5),height:imagemLaser.height}
            naveImg = {width: setSize(8), height:setSize(8)}
            if(detectaColisao(item,laserImg, posicaoNave, naveImg )){
                    gameOver=true;
            }
        });
      }
  }


function detectaColisao(obj1, img1, obj2, img2){
    if( ((obj1.x + img1.width) < obj2.x)  ||
        (obj1.x > (obj2.x + (img2.width/1.5)))  ||
        (obj1.y > (obj2.y + img2.height)) ||
        ((obj1.y + img1.height) < obj2.y)  ) return false;

    return true;
}
  
