function calcular() {
    var i = document.getElementById("inicio")
    var f = document.getElementById("fim")
    var p = document.getElementById("passo")
    var res = document.getElementById("resposta")

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        alert("[ERRO] Verifique os dados")
    }
    else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        res.innerHTML = "Contando:"

        if (p<=0){
            alert ("[ERRO] Passo menor que zero. Passo definido para 1")
            p = 1
        }
        if (i < f){
            /* Contagem crescente */
            for (var c=i;c<=f;c+=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        else {
            /* Contagem decrescente */
            for (var c=i;c>=f;c-=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}

/* \u{1F3C1} */