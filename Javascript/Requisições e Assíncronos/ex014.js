function mostrar() { /* método assíncrono */
    var imagem = document.querySelector("input").files[0]

    var reader = new FileReader()

    reader.onloadend = function() { /* quando terminar de carregar */
        var img = document.createElement("img")
        img.src = reader.result
        document.querySelector("div").appendChild(img)
    }

    reader.readAsDataURL(imagem)
}