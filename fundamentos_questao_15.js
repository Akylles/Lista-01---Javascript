let lista = [2, 'a', 0, 'e', 1, 3, 4, 'i', 5]
let numeros = []

for(let i = 0; i < lista.length; i++){
    if(typeof lista[i] == "number"){
        numeros.push(lista[i])
    }
}

numeros = numeros.sort()

let j = 0

for(let i = 0; i < lista.length; i++){
    if(typeof lista[i] == "number"){
        lista[i] = numeros[j]
        j++
    }
}

console.log(lista)