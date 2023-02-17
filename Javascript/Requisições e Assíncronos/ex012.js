function enviar() {
    var arquivo = document.querySelector("input").files[0] /* pega o arquivo 0 */

    var body = new FormData()
    body.append("title", "Nome do Título")
    body.append("arquivo", arquivo)

    var req = await fetch("https://link.com", { /* para onde vou mandar */
        method: "POST",
        body: body,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}