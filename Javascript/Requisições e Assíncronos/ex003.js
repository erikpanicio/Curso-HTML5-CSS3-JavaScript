var myPromise = new Promise(function(resolve, reject){ /* se o valor da promise for verdadeiro irá ativar o resolve, quanndo for falso o reject*/
    var nome = "Erik"

    if(nome === "Erik") {
        resolve("Usuário encontrado")
    }
    else {
        reject("Usuário não encontrado") /* mostra um erro */
    }
})

myPromise.then(function(data) { /* irá chamar o promise e a data receberá o valor do resolve. Não recebe o valor do reject, o próprio já mostra uma mensagem de erro */
    console.log(data)
})