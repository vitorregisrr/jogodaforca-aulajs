'use strict';
//funcao que é disparada quando uma letra é enviada
const letraErrada = (letra) => {
   rodada.erros ++;
   containerChutes.innerHTML += templateChute(letra, false);
   mudaSprite();
};

const mudaSprite = () => {
    sprite.innerHTML = rodada.erros;
};
