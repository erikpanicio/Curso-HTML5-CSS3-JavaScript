var personagem = {
    nome: "Erik",
    idade: 18,
    país: "Brasil",
    atributos: {
        força: 20,
        mana: 5,
        stamina: 15
    }
}

personagem.nome = "Pedro"

personagem.atributos.força += 5

console.log(personagem.nome)
console.log(personagem.atributos.força)