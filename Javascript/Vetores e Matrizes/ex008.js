var fruits = ["Banana", "Laranja", "Maçã", "Pêra", "Uva"]

var filtro = fruits.filter((value) => { /* Os valores podem ser (value, index ou array). Passa por todo o vetor/matriz procurando o que foi especificado, sem precisar de for para isso*/
    if (value.length > 4) {
        return true
    }
    else {
        return false
    }
})

console.log(filtro)

/* 

var filtro = fruits.filter((value) => {
    return value.length > 4
})

*/