function calculate() {
    const userNumber = Number(document.getElementById("userNumber").value);
    let isPrime = undefined
    
    for (let index = 2; index < userNumber; index++) {

        if (userNumber % index === 0) {
            isPrime = false
        }

        else if (isPrime !== false) {
            isPrime = true
        }
    }
      
    if (isPrime === true) {
        document.getElementById("result").innerHTML = `El número ${userNumber} es primo.`
    }
    if (isPrime === false) {
        document.getElementById("result").innerHTML = `El número ${userNumber} no es primo.`
    }
}
