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
    .then(function(data) {
        return data.toLowerCase() /* altera o dado */
    })
    .then(function(dataLower){ /* pega o dado modificado e faz algo. O que se fizer com o dado no then anterior irá alterar no próximo then */
        console.log(dataLower)
    })