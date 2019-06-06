function vogais(frase){
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let numVogais = 0;
    let numConsoantes = 0;

    for(let i = 0; i < frase.length; i++){
        if(vogais.includes(frase.charAt(i).toLowerCase())){
            numVogais++;
        }else{
            numConsoantes++;
        }
    }

    return "Vogais: " + numVogais + ", Consoantes: " + numConsoantes
}
