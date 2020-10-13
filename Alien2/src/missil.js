class Missil
{

    constructor(nave){

        this.missil = createSprite(nave.nave.position.x, nave.nave.position.y, 30,30) ;
        this.missil.addAnimation("missil_para_cima", missil_para_cima);
        this.missil.changeAnimation("missil_para_cima");
        this.missil.setSpeed(5,270);
    } 



}