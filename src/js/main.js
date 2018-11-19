'use strict';

//inicializando as variáveis
const sprite = document.querySelector('#sprite-container');
const containerChutes = document.querySelector('#container-chutes');
const containerPalavra = document.querySelector('#palavra-atual');
const input = document.querySelector('#input-letra');
const sendBtn = document.querySelector('#sendButton');

//eventos
sendBtn.addEventListener('click', function () {
    if (input.value != '' && input.value != ' ') {
        letraEnviada(input.value.toLowerCase());
        input.value = '';
    }
});

//templates html
const templateChute = (letra, status) => (status) ? `<div class="letra-chutada certo"> ${letra} </div>` : `<div class="letra-chutada errado"> ${letra} </div>`;