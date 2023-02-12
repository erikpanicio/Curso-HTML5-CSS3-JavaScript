var promise1 = new Promise(function(resolve, reject){
    resolve("Promise1 funcionando")
})

var promise2 = new Promise(function(resolve, reject){
    resolve("Promise2 funcionando")
})

var promise3 = new Promise(function(resolve, reject){
    resolve("Promise3 funcionando")
})

var resolveAll = Promise.all([promise1, promise2, promise3]).then(function(data) { /* executa todos o promises */
    console.log(data)
})