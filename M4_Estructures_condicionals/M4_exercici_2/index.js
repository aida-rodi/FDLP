function calculate() {
    const userAge = Number(document.getElementById("userAge").value)

    if (age <= 5) {
        document.getElementById("userGrade").innerHTML = "Preescolar"
    } else if (userAge <= 11) {
        document.getElementById("userGrade").innerHTML = "Primària"
    } else if (userAge <= 15) {
        document.getElementById("userGrade").innerHTML = "ESO"
    } else if (userAge <= 17) {
        document.getElementById("userGrade").innerHTML = "Batxillerat"
    } else {
        document.getElementById("userGrade").innerHTML = "FP o Universitat"
    }
}