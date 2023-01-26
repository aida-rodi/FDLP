function calculate() {
    const firstUserNum = Number(document.getElementById("firstNum").value)
    const secondUserNum = Number(document.getElementById("secondNum").value)
    const thirdUserNum = Number(document.getElementById("thirdNum").value)

    const average = (firstUserNum + secondUserNum + thirdUserNum) / 3

    document.getElementById("result").innerHTML = "La mitjana de les tres notes introduïdes és " + average
}