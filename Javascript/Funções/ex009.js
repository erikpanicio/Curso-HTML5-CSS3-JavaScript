function potenciacao(x){
    return x * x
}

function somaPotenciacao(a, b){
    var somaA = potenciacao(a)
    var somaB = potenciacao(b)
    var total = somaA + somaB
    return total
}

console.log(somaPotenciacao(2, 3))