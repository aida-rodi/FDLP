function guessNumber() {
    const randomNumber = Math.ceil((Math.random() * 10));
    console.log(randomNumber)
    let userNumber = Number(prompt("Introdueix un número de l'1 al 10"));

    while (userNumber !== randomNumber) {
        userNumber = Number(prompt ("Aún no adivinas, sigue probando"));
    }

    if (userNumber === randomNumber) {
        document.getElementById("result").innerHTML = `Enhorabona, el número era ${randomNumber}.`
    }
}