let player;
let inimigos;

function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();
    player = new Nave();
    inimigos = new Inimigo1();

}

function draw() {
    background(65,105,225);
 
    player.naveMovimenta(mouseX);
    



    
    drawSprites();

}
function mousePressed() {
    missil = new Missil(player);
 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, 50, 50);
}

 
 
 
 
 
