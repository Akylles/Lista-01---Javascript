let frase = "Ronaldo Fenomeno camisa 9"

frase = frase.split(' ')

let soma = 0

for(let i = 0; i < frase.length; i++){
    soma += frase[i].length;
}

console.log("Soma = " + soma)