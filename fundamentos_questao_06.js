let numeros = [0, 1, 2, 3, 4, 5, 1, 3, 1, 2, ,7, 7, 7, 7, 76]
let maior = 0
let num;

for(let i = 0; i < numeros.length; i++){

    let ocorrencia = 0;

    for(let j = i; j < numeros.length; j++){
        if(numeros[i] == numeros[j]){
            ocorrencia++;        
        }
    }

    if(ocorrencia > maior){
        maior = ocorrencia;
        num = numeros[i];
    }
}

console.log("O numero com maior numero de ocorrencias eh: " + num + " com " + maior + " ocorrências")