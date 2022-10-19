var vetor = []

function adicionar() {
    var numero = document.getElementById("numero")
    if (numero.length == 0){
        alert("Digite um valor")
    }
    else {
        var numero = Number(numero.value)
    }

    if (vetor.indexOf(numero) == -1) {
        if (numero >= 1 && numero <= 100) {
            vetor.push(numero)
            var res = document.getElementById("resposta")
            var item = document.createElement("option")
            item.text = `O valor ${numero} foi adicionado`
            res.appendChild(item)
            
        }
        else {
            alert("Valor inválido")
        }
    }
    else {
        alert("Valor inválido")
    }
}

function finalizar() {
    var resposta = document.getElementById("resposta_finalizar")
    resposta.innerHTML = `O total de números é de: ${vetor.length} <br>`
    var maior = vetor[0]
    var menor = vetor[0]
    for (var c = vetor.length; c>=0; c--) {
        if(vetor[c] > maior) {
            maior = vetor[c]
        }
        else if(vetor[c] < menor) {
            menor = vetor[c]
        }
    }
    resposta.innerHTML += `O maior número foi: ${maior} <br> O menor número foi: ${menor} <br>`

    var soma = 0
    var soma = Number(soma)
    for (var c = 0; c!=vetor.length; c++) { /* está repetindo mais do que devia */
        soma += vetor[c]
    }
    resposta.innerHTML += `A soma total dos número foi de: ${soma} <br>`
    resposta.innerHTML += `A média dos números é de: ${soma/vetor.length}`
}

/* 

function adicionar() {
    var vetor = []
    var numero = document.getElementById("numero")
    if (numero.length == 0){
        alert("Digite um valor")
    }
    else {
        var numero = Number(numero.value)
    }
    
    for (c = vetor.length; c >= 0; c--) {
        if (numero == vetor[c]) {
            var existe = true
        }
    }
    if (existe == true) {
        alert("Número já adicionado")
    }
    else {
        if (numero >= 1 && numero <= 100) {
            vetor.push(numero)
            var res = document.getElementById("resposta")
            var item = document.createElement("option")
            item.text = `O valor ${numero} foi adicionado`
            res.appendChild(item)
        }
        else {
            alert("Valor inválido")
        }
    }
}

*/