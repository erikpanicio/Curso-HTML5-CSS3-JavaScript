function calcular() {
    var num = document.getElementById("numero")
    var res = document.getElementById("resposta")
    if (num.value.length == 0) {
        alert("[ERRO] Por favor insira um número")
    }
    else {
        var num = Number(numero.value)
        res.innerHTML = "" /* apaga a tabuada anterior sempre que começar outra */
        for (var c=1;c<=10;c++) {
            var item = document.createElement("option")
            item.text = `${num} x ${c} = ${num*c}`
            
            res.appendChild(item) /* adiciona no select o texto do item */
            
        }
    }
}