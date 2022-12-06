function validar(usuario, senha) {
    if(usuario == "Erik" && senha == "123"){
        return true
    }
    else {
        return false
    }
}

var validacao = validar("Erik", "123")

if (validacao) {
    console.log("Acesso aprovado!")
}
else {
    console.log("Acesso negado!")
}