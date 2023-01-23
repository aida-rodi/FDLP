//EXAMPLES:

//THIS LINE WILL BE PRINTED IN THE BROWSER CONSOLE
//console.log('Hola mundo, esta es mi primera web!')

//THIS IS A STRING
//const username = 'Aida'

//THIS IS AN ARRAY
//const cities = ['Barcelona', 'Madrid']

//THIS IS AN OBJECT
//const person = {name: username, city: cities[0]}

//console.log('My name is ' + person.name)

//ARITHMETICS
//console.log (2 > 2)

/* console.log("hola mundo")

alert("Welcome to my website")

const myName = prompt("Introduce tu nombre")
console.log("Welcome " + myName)

const isOver18 = confirm("Eres mayor de Edad?")
console.log("Es mayor de edad? " + isOver18) */



function saveUsername() {
    const username = document.getElementById("name-input").value

    document.getElementById("welcome-message").innerHTML = 
    "Welcome " + username
}