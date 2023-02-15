function calculate() {

    let isPrime = true // el numero es primo hasta que se demuestre lo contrario

    const num = Number(prompt("Escribe un número, por favor"))
    checkPrime(num);


    function checkPrime(userNumber) {

        const isValidValue = !isNaN(userNumber) && userNumber > 1

        if (!isValidValue) {
            const num = Number(prompt("Comprueba que hayas introducido un número mayor a 1."))
            isPrime = true
            checkPrime(num)
        }

        if (isValidValue) {

            for (let index = 2; index < userNumber && isPrime === true; index++) {
                if (userNumber % index === 0) isPrime = false
            }
            
            if (isPrime) {
                document.getElementById("result").innerHTML = `El número ${userNumber} es primo.`
            }
            if (!isPrime) {
                const num = Number(prompt(`El numero ${userNumber} no es primo... Inténtalo de nuevo` ))
                isPrime = true
                checkPrime(num)
            }
        }
    }
}