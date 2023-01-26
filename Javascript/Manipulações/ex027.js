var lista = [45, 4, 9, 16, 25]
var lista2 = []

/* passa índice por índice da lista e se TODOS os valores satisfazerem a condição ele retorna true senão false (é como se fosse um &&) */
lista2 = lista.every(function(item) {
    if(item > 20) {
        return true
    }
    else {
        return false
    }
})

console.log(lista2)