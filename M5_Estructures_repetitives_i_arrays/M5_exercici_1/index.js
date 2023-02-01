const wordsRequested = Number(prompt("Quantes paraules vols afegir a l'array?"))
const wordsList = []

for (let index = 0; index < wordsRequested; index++) {
    const userWord = prompt("Introduce una palabra")
    wordsList.push(userWord)
}
const message = wordsList.join(", ")
document.getElementById("result").innerHTML = message