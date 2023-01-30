function checkNumbers() {
    const firstNum = Number(document.getElementById("firstUserNumber").value);
    const secondNum = Number(document.getElementById("secondUserNumber").value);

    if (Math.sign(firstNum) === -1 && Math.sign(secondNum) === 1 || Math.sign(firstNum) === 1 && Math.sign(secondNum) === -1) {
        document.getElementById("result").innerHTML = "Uno de los dos números es negativo."
    } else {
        document.getElementById("result").innerHTML = ""
    }
}