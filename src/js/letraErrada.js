'use strict';
//funcao que é disparada quando uma letra é enviada
const letraErrada = (letra) => {
   rodada.erros ++;
   mudaSprite();
    console.log(rodada.erros)
   if(rodada.erros >= 5){
        alert('Você perdeu! Recomeçando...');
        startGame();
   }
};

const mudaSprite = () => {
    sprite.innerHTML = rodada.erros;
};
