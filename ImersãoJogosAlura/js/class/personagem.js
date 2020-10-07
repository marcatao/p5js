class Personagem {
    constructor(imagem) {
        this.imagem = imagem;
        this.matriz = [
            [0, 0],
            [76, 0],
            [153, 0],
            [230, 0],
            [307, 0],
            [384, 0],
            [463, 0]
        ];
        this.frameAtual = 0;

    }

    exibe() {
        image(this.imagem, 25, height - 150, 110, 135, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 76, 76);
        this.andando();
    }

    andando() {
        this.frameAtual++;
        if (this.frameAtual > 6) this.frameAtual = 0;
    }
}