const name = prompt ("Introduce tu nombre")
const surname = prompt ("Introduce tu apellido")
const age = prompt ("Introduce tu edad")

const message = `El teu nom és ${name}, el teu cognom és ${surname} i tens ${age} anys.`

console.log(message)

alert(message)

document.getElementById("show-data").innerHTML = message