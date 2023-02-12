function teste() {
    console.log("Olá")
}

timer = setInterval(teste, 1000) /* roda a função de 1 em 1 segundo */


clearInterval(timer) /* cancela o interval */