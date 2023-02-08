function add(firstNumber, secondNumber) {
    firstNumber = Number(document.getElementById("firstNumber").value)
    secondNumber = Number(document.getElementById("secondNumber").value)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("result").innerHTML = "Error"
        return
    }

    const sumResult = firstNumber + secondNumber

    document.getElementById("result").innerHTML = sumResult
}

function subtract(firstNumber, secondNumber) {
    firstNumber = Number(document.getElementById("firstNumber").value)
    secondNumber = Number(document.getElementById("secondNumber").value)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("result").innerHTML = "Error"
        return
    }

    const subtractionResult = firstNumber - secondNumber

    document.getElementById("result").innerHTML = subtractionResult
}

function multiply(firstNumber, secondNumber) {
    firstNumber = Number(document.getElementById("firstNumber").value)
    secondNumber = Number(document.getElementById("secondNumber").value)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("result").innerHTML = "Error"
        return
    }

    const multiplicationResult = firstNumber * secondNumber

    document.getElementById("result").innerHTML = multiplicationResult
}

function divide(firstNumber, secondNumber) {
    firstNumber = Number(document.getElementById("firstNumber").value)
    secondNumber = Number(document.getElementById("secondNumber").value)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("result").innerHTML = "Error"
        return
    }

    const divisionResult = firstNumber / secondNumber

    document.getElementById("result").innerHTML = divisionResult.toFixed(2)
}

function remainder(firstNumber, secondNumber) {
    firstNumber = Number(document.getElementById("firstNumber").value)
    secondNumber = Number(document.getElementById("secondNumber").value)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        document.getElementById("result").innerHTML = "Error"
        return
    }

    const remainderResult = firstNumber % secondNumber

    document.getElementById("result").innerHTML = remainderResult
}