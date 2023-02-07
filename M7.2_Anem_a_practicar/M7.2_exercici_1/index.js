function drawTriangle() {

    const totalLines = Number(document.getElementById("userNumber").value)
    let asterisk = ""
    const triangle = []

    if (totalLines < 1 || isNaN(totalLines)) {
        alert("Ep! Comprova que has introduït correctament el número de línies")
        document.getElementById("result").innerHTML = ""
    }
    
    for (let lines = 1; lines <= totalLines; lines++) {
        asterisk += "* "
        triangle.push(asterisk)
    }

    document.getElementById("result").innerHTML = triangle.join("</br>")
}