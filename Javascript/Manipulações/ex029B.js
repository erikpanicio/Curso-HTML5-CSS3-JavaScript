var lista = [45, 4, 9, 16, 25]
var lista2 = []

/* encontra o primeiro item que satisfaça a condição e retorna a posição do item. Aceita na função: o item, o index e o próprio array*/
lista2 = lista.findIndex(function(item) {
    if(item == 16) {
        return true
    }
    else {
        return false
    }
})

console.log(lista2)