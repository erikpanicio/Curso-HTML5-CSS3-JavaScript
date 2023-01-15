var fruits = ["Banana", "Laranja", "Maçã", "Pêra", "Uva"]

var every = fruits.every((value) => { /* retorna true quando todos os itens do array forem true, baseado na condição estipulada */
    if(value.length > 4) {
        return true
    }
    else {
        return false
    }
})

if (every == true) {
    console.log("Todos tem mais de 4 letras")
}
else {
    console.log("Nem todos tem mais de 4 letras")
}
