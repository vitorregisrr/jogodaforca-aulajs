'use strict';

const testeVitoria = () => {
    let cont = 0;
    rodada.controladorPalavra.forEach((item) => {
        if (item != '') {
            cont++;
        }
    });
    if (cont == rodada.controladorPalavra.length) {
        alert('voce ganhou! nova jogada iniciada');
        //remove a primeira posicao do banco de palavras, que é a que estamos jogando
        bancoPalavras.shift();
        startGame();
    }
}