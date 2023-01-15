var amigo = {
    nome: "José",
    sexo: "M",
    peso: 85.5,
    engordar(p) {
        this.peso += p
    }
}

console.log(amigo.engordar(5))
console.log(amigo.peso)