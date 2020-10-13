let player;


function setup() {
    createCanvas(windowWidth, windowHeight);
    player = new Nave();

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

 
 
 
 
 
