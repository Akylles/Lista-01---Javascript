let frase = "Alan Mathison Turing"

frase = frase.split(' ').reverse()

let saida = ""

for(let i = 0; i < frase.length - 1; i++){
    saida = saida + frase[i].charAt(0) + ". "
}

saida = saida + frase[frase.length - 1]

console.log(saida)