function mostrar() { /* método síncrono */
    var imagem = document.querySelector("input").files[0]

    var img = document.createElement("img")
    img.src = URL.createObjectURL(imagem)

    document.querySelector("div").appendChild(img)
}