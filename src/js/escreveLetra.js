'use strict';
//funcao que é disparada quando uma letra é enviada
const escreveLetra = (letra, checagemArr) => {
    checagemArr.forEach(index => {
        //poe a letra no array de controle
        rodada.controladorPalavra[index] = letra;

        //apaga a letra para nao acertar mais de uma vez
        rodada.controladorPalavraCorreta[index] = '';

        //escreve a letra no span na posicao do acerto
        rodada.spanLetras[index].innerHTML = letra.toUpperCase();
    });

    //timeout se nao o ultimo acerto nao aparece
    setTimeout(() => {
        testeVitoria();
    }, 100);
};