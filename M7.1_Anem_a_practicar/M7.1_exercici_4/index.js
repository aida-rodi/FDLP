function double() {
    const userNum = Number(document.getElementById("number").value)

    const double = userNum * 2

    document.getElementById("result").innerHTML = `${userNum} x 2 = ${double}`
}

function triple() {
    const userNum = Number(document.getElementById("number").value)

    const triple = userNum * 3

    document.getElementById("result").innerHTML = `${userNum} x 3 = ${triple}`
}