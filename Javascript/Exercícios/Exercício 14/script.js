var timer

function comecar() {
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()
    var horario = hora+":"+minutos+":"+segundos

    document.querySelector("div").innerHTML = horario
}

timer = setInterval(comecar, 1000)

function parar() {
    clearInterval(timer)
}