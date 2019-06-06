let alunos = [
    ['Ronaldo', [7, 8, 9]],
    ['Chico', [10, 10, 10]],
    ['Josefa', [8, 6, 7]],
    ['Geraldo', [5, 3, 1]],
    ['Fatima', [5, 5, 5]]
]

for(let i = 0; i < 5; i++){
    let soma = 0.0;

    for(let j = 0; j < 3; j++){
        soma += alunos[i][1][j]
    }
    
    let media = soma / 3;

    if(media >= 7){
        console.log("Aluno " + alunos[i][0] + ", media " + media + ", Aprovado");
    }else{
        console.log("Aluno " + alunos[i][0] + ", media " + media + ", Reprovado");
    }

}