function maiorIdade(idade) {
    if(idade >= 18){
        return true
    }
    else {
        return false
    }
}

var maior_de_idade = maiorIdade(18)

if (maior_de_idade) { /* só colocando a variável significa que está comparando se o valor é true. Ex: maior_de_idade == true */
    console.log("É maior de idade")
}
else {
    console.log("É menor de idade")
}