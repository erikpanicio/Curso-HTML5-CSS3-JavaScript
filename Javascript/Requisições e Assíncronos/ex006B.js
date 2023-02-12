var promise1 = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Promise1 funcionando")
    }, 2000)
})

var promise2 = new Promise(function(resolve, reject){
    resolve("Promise2 funcionando")
})

var promise3 = new Promise(function(resolve, reject){
    resolve("Promise3 funcionando")
})

var resolveAll = Promise.all([promise1, promise2, promise3]).then(function(data) { /* executa todos o promises (só retorna os valores quando todos estiverem prontos) */
    console.log(data)
})