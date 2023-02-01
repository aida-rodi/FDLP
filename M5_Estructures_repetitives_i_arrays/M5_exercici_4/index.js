function guessNumber() {
    const randomNumber = Math.ceil((Math.random() * 10));
    console.log(randomNumber)
    let userNumber = Number(prompt("Introdueix un número de l'1 al 10"));

    let tries = 1

    for ( ;tries < 5 && userNumber !== randomNumber; tries++) {
        userNumber = Number(prompt ("No l'has encertat, prova un altre cop"));        
    }

    if (userNumber !== randomNumber) {
        document.getElementById("result").innerHTML = `Has gastat tots els intents! El número era ${randomNumber}.`
    }

    if (userNumber === randomNumber) {
        document.getElementById("result").innerHTML = `Enhorabona, el número era ${randomNumber} i has necessitat ${tries} intent(s) per encertar-lo.`
    }
}