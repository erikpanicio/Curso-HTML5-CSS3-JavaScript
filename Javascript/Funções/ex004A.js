function fatorial(n) {
    var fat = 1
    for (c=n;c>1;c--) {
        fat *= c
    }
    return fat
}

var resultado = fatorial(5)
console.log(resultado)