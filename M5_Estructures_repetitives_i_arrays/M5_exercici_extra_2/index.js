function printLetter() {
    const letterHeight = Number(document.getElementById("letterHeight").value)

    if (letterHeight < 1 || isNaN(letterHeight)) {
        alert("Comprova que hagis introduït correctament l'alçada de la L.")
        document.getElementById("result").innerHTML = " "
        return
    }

    const letterWidth = (Math.floor(letterHeight / 2)) +1
    const letterVertical = []
    const letterHorizontal = []

    for (let index = 0; index < letterHeight; index++) {
        letterVertical.push("*") 
    }
    for (let index = 1; index < letterWidth; index++) {
        letterHorizontal.push("*") 
    }

    document.getElementById("result").innerHTML = letterVertical.join('<br>') + " " + letterHorizontal.join(" ")
}