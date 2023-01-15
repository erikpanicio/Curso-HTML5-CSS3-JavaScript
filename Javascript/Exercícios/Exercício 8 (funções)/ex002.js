function calcularImovel(metragem, quartos) {
    var valor_metragem = metragem * 3000
    if (quartos == 1) {
        return (valor_metragem)
    }
    if(quartos == 2) {
        var valor_total = valor_metragem * 1.2
        return (valor_total)
    }
    if (quartos == 3) {
        var valor_total = valor_metragem * 1.5
        return (valor_total)
    }
}
var total = calcularImovel(10, 3)
console.log(`R$${total}`)