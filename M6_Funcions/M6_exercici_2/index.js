function retrieveAges(numberOfPeople) {
    const agesArray = [];

    while (agesArray.length < numberOfPeople) {
        const age = Number(prompt("Indica l'edat"));
        const isValidAge = age > 0 && age < 120;

        isValidAge ? agesArray.push(age) : alert("Escriu l'edat correctament");
    }
    return agesArray;
}

function calculateAgeAverage() {
    const numberOfPeople = Number(document.getElementById("people").value);
    const agesArray = retrieveAges(numberOfPeople);

    const sumArrays = agesArray.reduce((a, b) => (a | 0) + (b | 0));

    const average = (sumArrays / numberOfPeople).toFixed(2);

    const message = `La mitjana d'edat és ${average} anys.`;

    printResult(message);
}

function printResult(value) {
    document.getElementById("result").innerHTML = value;
}
