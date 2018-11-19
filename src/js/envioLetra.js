'use strict';
//funcao que é disparada quando uma letra é enviada
const letraEnviada = (letra) => {
    const checagem = checaLetra(letra);
    console.log(checagem)
    if(Array.isArray(checagem)){
        escreveLetra(letra, checagem);
        containerChutes.innerHTML += templateChute(letra, true);
    }else{
        letraErrada(letra);
    }
};
