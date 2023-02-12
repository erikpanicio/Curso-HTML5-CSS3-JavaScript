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

/* pegando o nome, sobrenome e idade da variável pessoa */

var {nome, sobrenome, idade} = pessoa /* desse jeito nome, sobrenome e idade se tornam variáveis como se eu tivesse definido elas ocmo no exemplo anterior */

console.log(nome, sobrenome, idade)