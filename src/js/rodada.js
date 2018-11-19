'use strict';

//funcao que tira a primeira posicao do array e guarda em outra variavel(pra nao repetir)
const sortearPalavra = () => {
    return (bancoPalavras[0]) ? bancoPalavras[0] : false; 

};

//objeto que guarda a rodada atual
const rodada = {};

//funcacao de começar rodada
const startGame = () => {
    //zerando as coisas
    containerChutes.innerHTML = '';
    containerPalavra.innerHTML = '';
    rodada.erros = 0;

    //sorteia a palavra
    rodada.objetoPalavra = sortearPalavra();

    if (rodada.objetoPalavra != false) {
        rodada.controladorPalavraCorreta = rodada.objetoPalavra.emArray;

        //variavel que vai ir sendo alterada no jogo, tira as letras e deixa uam string vazia
        rodada.controladorPalavra = rodada.objetoPalavra.emArray.map((letra) => '');

        //inicializa os tracinhos
        rodada.controladorPalavra.forEach(() => {
            containerPalavra.innerHTML += `<span class="palavra__letra">* </span>`;
        });

        rodada.spanLetras = document.querySelectorAll('.palavra__letra');

    }else{
        console.log('Voce ja venceu todas as partidas!');
    }
};

startGame();