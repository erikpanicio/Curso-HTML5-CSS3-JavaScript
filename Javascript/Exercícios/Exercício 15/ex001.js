var cartao = "1234123412341234"

var ultimosDigitos = cartao.slice(-4)

console.log(`Seu cartão é de final: ${ultimosDigitos.padStart(16, "*")} ?`)