var pessoa = {
    nome: "Erik",
    sobrenome: "Panicio",
    idade: 19,
    social: {
        facebook: "Facebook",
        instagram: {
            url: "@Erik",
            seguidores: 120
        }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

var {nome, idade, social:{instagram:{url}}} = pessoa

console.log(nome, idade, url)