function calculate() {
    const firstNum = Number(document.getElementById("firstUserNum").value)
    const secondNum = Number(document.getElementById("secondUserNum").value)

    const add = firstNum + secondNum
    const subtract = firstNum - secondNum
    const multiply = firstNum * secondNum
    const divide = firstNum / secondNum

    document.getElementById("add").innerHTML = "El resultat de la suma és " + add
    document.getElementById("subtract").innerHTML = "El resultat de la resta és " + subtract
    document.getElementById("multiply").innerHTML = "El resultat de la multiplicació és " + multiply
    document.getElementById("divide").innerHTML = "El resultat de la divisió és " + divide
}