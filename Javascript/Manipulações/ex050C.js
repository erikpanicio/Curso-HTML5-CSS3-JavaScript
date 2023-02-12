var pessoa = {
    nome: "Erik",
    sobrenome: "Panicio",
    idade: 19,
    social: {
        facebook: "Facebook",
        instagram: "Instagram"
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

/* mudando o nome da variável */

var {nome:pessoaNome, sobrenome:pessoaSobrenome, idade:pessoaIdade} = pessoa

console.log(pessoaNome, pessoaSobrenome, pessoaIdade)