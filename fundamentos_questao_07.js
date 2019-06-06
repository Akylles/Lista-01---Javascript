let nome = "Ronaldo"
let sobrenome = "Fenômeno"
let nomeCompleto = nome +  " " + sobrenome

if(nomeCompleto.length < 5){
    nomeCompleto = nomeCompleto.toUpperCase()
    console.log(nomeCompleto)
}else if(nomeCompleto.length > 5){
    nomeCompleto = nomeCompleto.toLowerCase()
    console.log(nomeCompleto)
}