var h1 = document.querySelector("h1")

function azul() {
    limpar()
    h1.classList.add("azul")
}

function vermelho() {
    limpar()
    h1.classList.add("vermelho")
}

function verde() {
    limpar()
    h1.classList.add("verde")
}

function limpar() {
    h1.classList.remove("azul")
    h1.classList.remove("vermelho")
    h1.classList.remove("verde")
}