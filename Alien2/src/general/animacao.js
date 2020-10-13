class Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
      this.matriz = matriz;
      this.imagem = imagem;
      this.largura = largura;
      this.altura = altura;
      this.x = x;
      this.variacaoY = variacaoY;
      this.y = height - this.altura - this.variacaoY;
      this.larguraSprite = larguraSprite;
      this.alturaSprite = alturaSprite;
      this.frameAtualAux = 0;
      this.frameAtual = 0;
    }
    
      exibe(mouse=50){
        image(this.imagem, mouse, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);   
      
      this.anima();
    }
    
    anima(){
     
      this.frameAtualAux += 0.01;
      if(Number.isInteger(this.frameAtualAux)){
         console.log('OK' + this.frameAtualAux)
      }else{
        console.log('ERRO' + this.frameAtualAux)
      }
      this.frameAtual++;
      if(this.frameAtual >= this.matriz.length) {
        this.frameAtual = 0
      }
    }
  }