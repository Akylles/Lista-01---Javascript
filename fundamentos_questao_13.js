let lista = [10, 58, 68, 88, 25, 45]
let soma = 0

for(let i = 0; i < lista.length; i++){
    lista[i] = Math.pow(lista[i], 3)
    soma += lista[i]
}

console.log(lista)
console.log(soma)