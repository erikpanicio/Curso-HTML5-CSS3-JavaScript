/* Utilizar a extenção node exec */

function par_impar(n) {
    if (n%2==0) {
        return "Par" /* retorna para a variável que começou a função, o resultado par */
    }
    else {
        return "Ímpar" /* retorna para a variável que começou a função, o resultado ímpar */
    }
}

var resultado = par_impar(2) /* o valor 2 vai para n, e o resultado da função entra na variável resultado */
console.log(resultado)