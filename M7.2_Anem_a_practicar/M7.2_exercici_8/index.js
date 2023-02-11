function showFibonacci() {
    const userNumber = Number(document.getElementById("userNumber").value)

    if (userNumber < 1 || isNaN(userNumber)) {
        alert("Ep! No has introduït un número correctament.")
        return
    }

    const fibonacci = [0,1]

    while (fibonacci.length < userNumber) {
        fibonacci.push(fibonacci[fibonacci.length -2] + fibonacci[fibonacci.length -1])
    }

    if (userNumber === 1) {
        document.getElementById("result").innerHTML = 0
    } else {
        document.getElementById("result").innerHTML = fibonacci.join(", ")
    }
}