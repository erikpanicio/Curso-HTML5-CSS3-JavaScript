var personagem = {
    nome: "Erik",
    sobrenome: "Panicio",
    nomeCompleto: function() { /* nomeCompleto já é o nome da função */
        return `${this.nome} ${this.sobrenome}` /* this acessa o próprio objeto, não dá para escrever personagem.nome, porque já estamos dentro desse objeto, então para referenciar à esse objeto usamos o this */
    }
}

console.log(personagem.nomeCompleto())