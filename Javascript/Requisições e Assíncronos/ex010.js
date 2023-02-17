async function loadPosts() { /* estará utilizando o await */
    var req = await fetch("https://jsonplaceholder.typicode.com/posts") /* vai esperar terminar a promise */
    var json = await req.json()
    montarBlog(json)
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