function printTimesTable() {
    
    const userNumber = Number(document.getElementById("userNumber").value)

    if (userNumber < 1 || userNumber > 10 || isNaN(userNumber)) {
        alert("Assegura't d'haver introduït un número entre 1 i 10")
        document.getElementById("result").innerHTML = " "
        return
    }

    const timesTable = []
    
    for (let multiplier = 1; multiplier <= 10; multiplier++) {
        timesTable.push(`${userNumber} x ${multiplier} = ${userNumber*multiplier}`)
    }
    
    document.getElementById("result").innerHTML = timesTable.join('<br>')
}