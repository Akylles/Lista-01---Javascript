let lado1 = 13
let lado2 = 15
let lado3 = 8

let semiPerimetro = (lado1 + lado2 + lado3) / 2

let area = Math.sqrt(semiPerimetro * (semiPerimetro - lado1) * (semiPerimetro - lado2) * (semiPerimetro - lado3))

console.log("Area do triangulo eh " + area)