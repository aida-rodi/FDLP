function calculate() {
    let userNumber = undefined
    let isPrime = undefined
    
    function checkPrime(userNumber) {
        if (isNaN(userNumber) || userNumber <= 0) {
            isPrime = undefined
            checkPrime(userNumber = Number(prompt("Comprueba que hayas introducido un número mayor a 0.")))
        }

        for (let index = 2; index < userNumber; index++) {
            if (userNumber % index === 0) {
                isPrime = false
            }
    
            else if (isPrime !== false) {
                isPrime = true
            }
        }
        
        console.log (isPrime)
        if (isPrime === true) {
            document.getElementById("result").innerHTML = `El número ${userNumber} es primo.`
        }
        if (isPrime === false) {
            isPrime = undefined
            checkPrime(userNumber = Number(prompt("Inténtalo de nuevo")))
        }
    }

    if (isPrime === undefined || isPrime === false) {
        checkPrime(userNumber = Number(prompt("Escribe un número, por favor")));
    }
}


/* function calculate(){
    let userNumber = Number(prompt("Escribe un número, por favor"));

    for (let index = 2; index < userNumber; index++) {
        if (userNumber%index === 0 ) {
            let isPrime = false  
            console.log (isPrime)
         // userNumber = prompt("¡Sigue intentando, por favor!")
            return 
        }
        else {isPrime = true}
    }
    console.log (isPrime)
    document.getElementById("result").innerHTML= `El numero ${userNumber} es primo`
} */
