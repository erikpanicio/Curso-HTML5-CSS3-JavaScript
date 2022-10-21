function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var form_ano = document.getElementById("ano_nasc")
    var res = document.getElementById("resultado")
    if (form_ano.value.length == 0 || Number(form_ano.value) > ano) {
        alert("Verifique os dados e tente novamente")
    }
    else {
        var form_sexo = document.getElementsByName("sexo")
        var idade = ano - Number(form_ano.value)

        var img = document.createElement("img") /* cria uma tag img */
        img.setAttribute("id", "foto") /* da o id de nome foto para a tag */

        if (form_sexo[0].checked) {
            form_sexo = "Homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "images/foto-bebe-m.png")
            }
            else if (idade > 10 && idade <= 25){
                img.setAttribute("src", "images/foto-jovem-m.png")
            }
            else if (idade > 25 && idade <= 50){
                img.setAttribute("src", "images/foto-adulto-m.png")
            }
            else {
                img.setAttribute("src", "images/foto-idoso-m.png")
            }
        }
        else if(form_sexo[1].checked) {
            form_sexo = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "images/foto-bebe-f.png")
            }
            else if (idade > 10 && idade <= 25){
                img.setAttribute("src", "images/foto-jovem-f.png")
            }
            else if (idade > 25 && idade <= 50){
                img.setAttribute("src", "images/foto-adulto-f.png")
            }
            else {
                img.setAttribute("src", "images/foto-idoso-f.png")
            }
        }
        res.innerHTML = `Você é ${form_sexo} e tem ${idade} anos <br>`
        res.appendChild(img) /* adiciona a imagem */
    }
}