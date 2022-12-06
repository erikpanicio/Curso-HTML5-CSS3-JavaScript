function nomeCompleto(nome, sobrenome) {
    console.log(nome, sobrenome)
    return `${nome} ${sobrenome}`
}

var nome_completo = nomeCompleto("Erik", "Panicio") /* o valor do return não fica em quem chamou a função, por isso é preciso criar uma variável */
console.log(nome_completo) /* com o return ele retornará os valores definidos para a variável que chamou a função e logo em seguida sai da função. Então se colocar o return antes do console.log não irá aparecer o console.log */
