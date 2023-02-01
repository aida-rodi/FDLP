function calculateIntervals() {

    const number1 = Number(document.getElementById('userNumber1').value)

    const number2 = Number(document.getElementById('userNumber2').value)

    const numbersList = []

    let result = 0

    for (let index = number1; index <= number2; index++) {

        result = result + index

        numbersList.push(index)
    }

    document.getElementById('result').innerHTML = `${numbersList.join(' + ')} = ${result}`
}