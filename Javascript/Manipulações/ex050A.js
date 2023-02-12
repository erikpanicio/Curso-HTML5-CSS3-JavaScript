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

/* como fazer isso de outra forma? */

var nome = pessoa.nome
var sobrenome = pessoa.sobrenome
var idade = pessoa.idade

console.log(nome, sobrenome, idade)