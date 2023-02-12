var pessoa = {
    nome: "Erik",
    sobrenome: "Panicio",
    social: {
        facebook: "Facebook",
        instagram: "Instagram"
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

/* definindo um valor padrão para a variável idade. Se não existir a variável no objeto pessoa, quando eu puxar essa variável (que não existe), retornará o valor padrão definido */

var {nome, sobrenome, idade = 0} = pessoa

console.log(nome, sobrenome, idade)