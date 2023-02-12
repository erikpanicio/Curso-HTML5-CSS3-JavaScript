var myPromise = new Promise(function(resolve, reject){
    var nome = "Erik"

    if(nome === "Erik") {
        resolve("Usuário encontrado")
    }
    else {
        reject("Usuário não encontrado")
    }
})

myPromise
    .then(function(data) { /* sempre irá receber o dado do resolve */
        console.log(data)
    })
    .catch(function(erro) { /* sempre irá receber o dado do reject */
        console.log(`Aconteceu um erro: ${erro}`)
    })