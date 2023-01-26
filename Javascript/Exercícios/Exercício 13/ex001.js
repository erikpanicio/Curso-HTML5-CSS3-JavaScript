var lista = [
    {id:1, nome: "Erik", sobrenome: "Panicio"},
    {id:2, nome: "João", sobrenome: "Paulo"},
    {id:3, nome: "Marcos", sobrenome: "Silva"}
]

var pessoa = lista.find(function(item) {
    if(item.id == 2) {
        return true
    }
    else {
        return false
    }
})

console.log(pessoa)