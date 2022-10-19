/* maneira recursiva(quando a função chama ela mesma) */

function fatorial(n) {
    if(n == 1) {
        return 1
    }
    else {
        return n * fatorial(n-1)
    }
}

var resultado = fatorial(5)
console.log(resultado)