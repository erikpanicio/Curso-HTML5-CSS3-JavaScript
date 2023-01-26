var lista = [45, 4, 9, 16, 25]
var lista2 = []

/* o map passa índice por índice da lista, coloca o valor do índice no item que consequentmente se faz o que quiser dentro da função */
lista2 = lista.map(function(item) {
    return item * 2
})

console.log(lista2)