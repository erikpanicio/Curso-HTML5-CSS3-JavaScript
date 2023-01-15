function carregar() {
    var msg = document.getElementById("mensagem")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são: ${hora} horas`
    if (hora >= 0 && hora <= 12) {
        img.src = "images/manha.png" /* altera o texto do src */
        document.body.style.background = "#ACB77A"
    }
    else if (hora > 12 && hora <= 18){
        img.src = "images/tarde.png"
        document.body.style.background = "#E2883A"
    }
    else {
        img.src = "images/noite.png"
        document.body.style.background = "#115A77"
    }
}