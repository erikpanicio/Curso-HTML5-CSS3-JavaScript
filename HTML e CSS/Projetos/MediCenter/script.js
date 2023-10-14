var num = 0

function clicado() {
    var lista = document.querySelector(".header-flex ul")
    lista.style.display = "block"
    num += 1
    if (num == 2) {
        num = 0
        lista.style.display = "none"
    }
}
