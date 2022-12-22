var fruits = ["Banana", "Laranja", "Maçã", "Pêra", "Uva"]

var every = fruits.some((value) => { /* retorna true quando algum dos itens do array forem true, baseado na condição estipulada */
    if(value.length > 4) {
        return true
    }
    else {
        return false
    }
})

if (every == true) {
    console.log("Algum tem mais de 4 letras")
}
else {
    console.log("Nenhum tem mais de 4 letras")
}
