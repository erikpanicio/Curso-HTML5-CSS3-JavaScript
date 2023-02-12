function teste() {
    console.log("Funcionou")
}

var time_out = setTimeout(teste, 1000) /* depois de 5s ele irá rodar a função */

clearTimeout(time_out) /* cancela o timeout */