async function inserirPost() {
    var req = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", /* permite utilizar esses dados abaixo (body, headers) */
        body: JSON.stringify({ /* envia esses dados */
            title: "Título teste",
            body: "Body Teste",
            userId: 4
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    var json = await req.json()
    console.log(json)
}