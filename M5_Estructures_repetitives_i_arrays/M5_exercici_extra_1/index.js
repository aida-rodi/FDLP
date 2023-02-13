function playGame() {
    const randomNumber = Math.ceil(Math.random() * 500);
    console.log(randomNumber);

    let userNumber = Number(prompt("Escriu un número entre 1 i 500:"))

    while (userNumber !== randomNumber) {

        if (userNumber < 1 || userNumber > 500 || isNaN(userNumber) ) {
            userNumber = Number(prompt("No has introduït un número vàlid. Escriu un número entre 1 i 500:"));
        }
        if (userNumber >= randomNumber + 50) {
            userNumber = Number(prompt("Fred, fred, el número que busques és més petit. Torna a provar!"));
        }
        if (userNumber <= randomNumber - 50) {
            userNumber = Number(prompt("Fred, fred, el número que busques és més gran. Torna a provar!"));
        }
        if (userNumber >= randomNumber + 15 && userNumber < randomNumber + 50) {
            userNumber = Number(prompt("Templat, templat, t'hi has acostat però el número que busques és més petit. Torna a provar!"));
        }
        if (userNumber <= randomNumber - 15 && userNumber > randomNumber - 50) {
            userNumber = Number(prompt("Templat, templat, t'hi has acostat però el número que busques és més gran. Torna a provar!"));
        }
        if (userNumber >= randomNumber + 1 && userNumber < randomNumber + 15) {
            userNumber = Number(prompt("Calent, calent, estàs molt a prop, però el número que busques és una mica més petit. Torna a provar!"));
        }
        if (userNumber <= randomNumber - 1 && userNumber > randomNumber - 15) {
            userNumber = Number(prompt("Calent, calent, estàs molt a prop, però el número que busques és una mica més gran. Torna a provar!"));
        }
    }

    if (userNumber === randomNumber) {
        document.getElementById("result").innerHTML = `Felicitats, l'has encertat! El número era ${randomNumber}`
        return
    }
}