var lista = [45, 4, 9, 16, 25]
var lista2 = []

/* passa índice por índice da lista e se ALGUM valor satisfazer a condição ele retorna true senão false (é como se fosse um ||) */
lista2 = lista.some(function(item) {
    if(item > 20) {
        return true
    }
    else {
        return false
    }
})

console.log(lista2)