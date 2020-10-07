class Inimigo extends {
    constructor(imagem) {
        this.imagem = imagem;
        this.matriz = [
            [0, 0],
            [102, 0]
        ];
        this.frameAtual = 0;

    }

    exibe() {
        image(this.imagem, width - 200, height - 150, 110, 135, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 102, 102);
        this.andando();
    }

    andando() {
        this.frameAtual++;
        if (this.frameAtual > this.matriz.length - 1) this.frameAtual = 0;
    }
}