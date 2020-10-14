
function preload() {
    nave_para_frente = loadAnimation('assets/img/nave/nave_reta/01.png','assets/img/nave/nave_reta/02.png','assets/img/nave/nave_reta/03.png');
    nave_para_frente.frameDelay = 10;
    nave_para_esquerda = loadAnimation('assets/img/nave/nave_esquerda/01.png','assets/img/nave/nave_esquerda/02.png');
    nave_para_direita = loadAnimation('assets/img/nave/nave_direita/01.png','assets/img/nave/nave_direita/02.png');

    missil_para_cima = loadAnimation('assets/img/missil/01.png',
                                      'assets/img/missil/02.png',
                                      'assets/img/missil/03.png',
                                      'assets/img/missil/04.png',
                                      'assets/img/missil/05.png',
                                      'assets/img/missil/06.png',
                                      'assets/img/missil/07.png');
    missil_para_cima.frameDelay = 10;

     inimigo1_atacando = loadAnimation( 'assets/img/inimigo1/01.png',
                                        'assets/img/inimigo1/02.png',
                                        'assets/img/inimigo1/03.png',
                                        'assets/img/inimigo1/04.png',
                                        'assets/img/inimigo1/05.png',
                                        'assets/img/inimigo1/06.png',
                                        'assets/img/inimigo1/07.png',
                                        'assets/img/inimigo1/08.png',
                                        'assets/img/inimigo1/09.png',
                                        'assets/img/inimigo1/10.png',
                                        'assets/img/inimigo1/11.png',
                                        'assets/img/inimigo1/12.png',
                                        'assets/img/inimigo1/13.png',
                                        'assets/img/inimigo1/14.png',
                                        'assets/img/inimigo1/15.png',
                                        'assets/img/inimigo1/16.png'
    );
    inimigo1_atacando.frameDelay = 4;
}