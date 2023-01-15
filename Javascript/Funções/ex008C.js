var count = 0

function add(){
    var count = 0 /* essa variável só funciona aqui dentro. Aqui dentro terá o valor 2 */
    count++
}

add()
add()

console.log(count)

/* Irá retornar 0 porque a variável criada aqui fora não foi modificada */