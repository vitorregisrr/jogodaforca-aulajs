'use strict';
//funcao que é disparada quando uma letra é enviada
const escreveLetra = (letra, checagemArr) => {
    checagemArr.forEach(index => {
        rodada.controladorPalavra[index] = letra;
        rodada.objetoPalavra.emArray[index] = '';
        rodada.spanLetras[index].innerHTML = letra;
    });

    setTimeout(() => {
        testeVitoria();
    }, 1000);
};