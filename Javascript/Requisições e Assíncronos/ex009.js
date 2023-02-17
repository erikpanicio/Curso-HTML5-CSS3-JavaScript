function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts") /* por padrão a requisição é GET */
    .then(function(resultado) {
        return resultado.json() /* retorna uma promise, por isso precisa de outro then */
    })
    .then(function(resultadoJson) {
        montarBlog(resultadoJson)
    })
    .catch(() => {
        console.log("Erro")
    })
}

function montarBlog(lista) {
    var html = ""

    for(var i=0;i<lista.length;i++) {
        html += `<h3> ${lista[i].title} </h3>`
        html += `${lista[i].body} <br>`
        html += "<hr>"
    }
    document.querySelector(".posts").innerHTML = html
}