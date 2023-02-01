function calculateIntervals() {

    const number1 = Number(document.getElementById('userNumber1').value) // 9

    const number2 = Number(document.getElementById('userNumber2').value) // 7

    const numbersList = []

    let result = 0

    if (number1 < number2) {
        for (let index = number1; index <= number2; index++) {

            result = result + index
    
            numbersList.push(index)
        }
    }

    if (number1 > number2) {
        for (let index = number1; index >= number2; index--) {

            result = result + index

            numbersList.push(index)
        }
    }

    document.getElementById('result').innerHTML = `${numbersList.join(' + ')} = ${result}`
}