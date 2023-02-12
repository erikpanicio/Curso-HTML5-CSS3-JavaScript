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

/* pega o nome facebook dentro do objeto pessoa, dentro de social */
/* do objeto pessoa.social pegue a variável facebook (dentro do objeto) e atribua o valor ao facebook (fora do objeto) */

var {nome, idade, social:{instagram}} = pessoa

console.log(nome, idade, instagram)