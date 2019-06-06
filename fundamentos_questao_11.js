let lista = [10, 58, 68, 88, 25, 45]
let tamanho = lista.length
let n = 3;
let novaLista = [];

for(let i = tamanho - n; i < tamanho; i++){
    novaLista.push(lista[i])
}

console.log(novaLista)