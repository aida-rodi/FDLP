const name = prompt ("Introduce tu nombre")
const surname = prompt ("Introduce tu apellido")
const age = prompt ("Introduce tu edad")

const isUserAdult = age >= 18

const userIsAdult = `${name} ${surname}, ets MAJOR d'edat.`
const userIsMinor = `${name} ${surname}, ets MENOR d'edat.`

isUserAdult ? document.getElementById("show-data").innerHTML = userIsAdult : document.getElementById("show-data").innerHTML = userIsMinor


// CON "IF ELSE" FUNCIONA PERO QUERÍA PROBAR EL TERNARIO "?"
/*if (age >= 18) {
    document.getElementById("show-data").innerHTML = userIsAdult
} else {
    document.getElementById("show-data").innerHTML = userIsMinor
}*/