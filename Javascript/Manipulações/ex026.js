var lista = [45, 4, 9, 16, 25]
var lista2 = []

/* passa índice por índice da lista e se o valor retornado for positivo ele mantém o valor na lista */
lista2 = lista.filter(function(item) {
    if(item < 20) {
        return true
    }
    else {
        return false
    }
})

console.log(lista2)