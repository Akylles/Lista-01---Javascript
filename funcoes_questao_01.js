
function inverteNumero(num){
    let stringInvertida = num.toString().split('').reverse().join('')
    return parseInt(stringInvertida)
}