var array = ["Erik Panicio", "Erik", "Panicio", "@Erik"]

/* se eu não quiser pegar certos valores eu posso pulá-los */
var [nomeCompleto, , , instagram] = array

console.log(nomeCompleto, instagram)