let naveEspacial;
let imagemAlien; 
let imagemMissil;

let posicaoMissil = new Array();

let posicaoNave;
let posicaoAlien;
let alienVivo =true;

let tamnhoAlien = 5;
let alienDirecao = true;
let velocidadeAlien = 5;

function preload(){
    naveEspacial = loadImage('../assets/img/Nave.png');
    imagemAlien = loadImage('../assets/img/Alien1.png');
    imagemMissil = loadImage('../assets/img/Missil.png');
    
 
    posicaoNave = createVector();
    posicaoAlien = createVector();

    posicaoNave.x =  mouseX-(naveEspacial.width/2);
    posicaoNave.y = (windowHeight - (naveEspacial.height * 150));



    posicaoAlien.x = 400;
    posicaoAlien.y = 300;
}

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    background(100);

    colisaoAlien();
    posicaoNave.x =  mouseX-(naveEspacial.width/2);
    image(naveEspacial, posicaoNave.x, posicaoNave.y, setSize(8),setSize(8));
    
    movimentarAlien();
    if(alienVivo) image(imagemAlien, posicaoAlien.x, posicaoAlien.y ,setSize(tamnhoAlien),setSize(tamnhoAlien)); 
   
    desenhaMisseis();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, 50, 50);
}

function setSize(val){
    return windowWidth * (val / 100);
}

function mousePressed(){
    console.log("mousePressed");
    criarPosicoes();

} 

function colisaoAlien(){
  if(posicaoMissil.length > 0){
    posicaoMissil.forEach(function (item, i) {
         if (!(item.x > posicaoAlien.x + setSize(tamnhoAlien) ||
               item.x + setSize(1) < posicaoAlien.x ||
               item.y > posicaoAlien.y + setSize(tamnhoAlien) ||
               item.y + setSize(2) < posicaoAlien.y)) alienVivo = false;
    });
  }
}

function movimentarAlien(){
    
    if((posicaoAlien.x+setSize(tamnhoAlien)) > windowWidth)alienDirecao = false;
    if(posicaoAlien.x == 0) alienDirecao = true;
    if(alienDirecao){
        posicaoAlien.x +=velocidadeAlien;
    }else{
        posicaoAlien.x -=velocidadeAlien;
    }    
    
}

function criarPosicoes(){
    console.log('criarMisseis');
    posicaoMissil.push(createVector((((posicaoNave.x+(naveEspacial.width/2))) - (setSize(1)/2)), posicaoNave.y));
 
}

function desenhaMisseis(){
    posicaoMissil.forEach(function (item, i) {
        image(imagemMissil, item.x, item.y ,setSize(1),setSize(2)); 
        posicaoMissil[i].y -= 4;
        if(posicaoMissil[i].y <= 0) posicaoMissil.splice(i,i);
    });
    console.log(posicaoMissil.length);
}