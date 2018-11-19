'use strict';
//funcao que é disparada quando uma letra é enviada
const letraEnviada = (letra) => {
    const checagem = checaLetra(letra);
    containerChutes.innerHTML += templateChute(letra, checagem);
    if(Array.isArray(checagem)){
        escreveLetra(letra, checagem);
    }else{
        letraErrada(letra);
    }
};
