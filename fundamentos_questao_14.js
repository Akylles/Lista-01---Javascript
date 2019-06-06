let frase = "O Rato Roeu a Roupa do Rei de Roma"
let palavra = "roupa"

if(frase.toLowerCase().includes(palavra.toLowerCase())){
    console.log("A palavra \"" + palavra + "\" está contida na frase \"" + frase + "\"")
}else{
    console.log("A palavra \"" + palavra + "\" NÃO está contida na frase \"" + frase + "\"")
}

