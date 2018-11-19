//funcao que checa se a letra existe e não foi 
const checaLetra = (letra) => {
    let checagem = rodada.objetoPalavra.emArray.map( (elem, index) =>{
        if(elem == letra){
            return index;
        }
    }).filter( (elem) => elem != undefined );

    //guarda em um array as posicoes encontradas, o filter é para remover os undefined

    return checagem.length > 0 ? checagem : false;
    //se nao for um array vazio retorna o array, se for retorna falso
}