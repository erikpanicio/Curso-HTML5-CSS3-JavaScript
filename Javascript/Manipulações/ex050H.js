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
}

function nomeCompleto({nome, sobrenome = "Silva"}) { /* se não tiver sobrenome, por padrão será Silva */
    return `${nome} ${sobrenome}`
}

console.log(nomeCompleto(pessoa))