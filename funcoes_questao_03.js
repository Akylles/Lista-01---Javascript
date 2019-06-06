function maiorMenor(lista){
    
    let length = lista.length;

    for (let i = 1; i < length; i++) {
        let key = lista[i];
        let j = i - 1;
        while (j >= 0 && lista[j] > key) {
            lista[j + 1] = lista[j];
            j = j - 1;
        }
        lista[j + 1] = key;
    }
    
    let menor = lista[0];
    let maior = lista[length - 1];

    return "O menor: " + menor + ", o maior: " + maior
}