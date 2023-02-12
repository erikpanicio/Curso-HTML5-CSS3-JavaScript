/* Promises na prática */

var userName = "erikpanicio"

fetch(`https://api.github.com/users/${userName}`, {
    method: "GET",
    headers: {
        Accept: "application/vnd.github.v3+json",
    },
})
.then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
})
.then((data) => {
    console.log(`O nome do usuário é: ${data.name}`)
})
.catch((erro) => {
    console.log("Houve um erro!")
})
