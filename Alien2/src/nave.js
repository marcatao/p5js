class Nave {
  
    constructor(){
        this.nave = createSprite(mouseX, (windowHeight*0.85) );
        this.nave.addAnimation("nave_para_frente", nave_para_frente);
        this.nave.addAnimation("nave_para_esquerda", nave_para_esquerda);
        this.nave.addAnimation("nave_para_direita", nave_para_direita);
    } 

    naveMovimenta(val){
        this.nave.changeAnimation("nave_para_frente"); 
        if(this.nave.position.x  > val) this.nave.changeAnimation("nave_para_esquerda");
        if(this.nave.position.x  < val) this.nave.changeAnimation("nave_para_direita");
        this.nave.position.x = val;
    }
}