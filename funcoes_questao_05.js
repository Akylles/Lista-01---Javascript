function maiorPalavra(frase){
    let lista = frase.split(' ');
    let maior = 0;
    let palavra;

    for(let i = 0; i < lista.length; i++){
        if(lista[i].length > maior){
            maior = lista[i].length
            palavra = lista[i]
        }
    }

    return palavra

}