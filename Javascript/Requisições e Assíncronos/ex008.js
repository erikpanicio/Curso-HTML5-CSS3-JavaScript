function loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts") /* por padrão a requisição é GET */
    .then(function(resultado) {
        return resultado.json() /* retorna uma promise, por isso precisa de outro then */
    })
    .then(function(resultadoJson) {
        document.querySelector(".posts").innerHTML = resultadoJson.length
    })
    .catch(() => {
        console.log("Erro")
    })
}