var cores = [
    {nome: "preto", quantidade: 10},
    {nome: "azul", quantidade: 5},
    {nome: "vermelho", quantidade: 15}
]

/* 
for (var i=0; i < cores.length; i++) {
    console.log(cores[i])
}
*/


/* for (var i in cores) { // i irá receber quantos itens tem dentro de cores de um em um 1 => 2 => 3... até o último. Pega a chave
    console.log(cores[i])
} */


for (var cor of cores) { // diferente do de cima, ao invés de receber o valor da cor ele já recebe a própria cor: preto => branco... até o último. Pega o valor
    console.log(cor)
}