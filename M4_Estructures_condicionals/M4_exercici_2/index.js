function calculate() {
    const age = Number(document.getElementById("userAge").value)

    if (age <= 5) {
        document.getElementById("userGrade").innerHTML = "Preescolar"
    } else if (age <= 11) {
        document.getElementById("userGrade").innerHTML = "Primària"
    } else if (age <= 15) {
        document.getElementById("userGrade").innerHTML = "ESO"
    } else if (age <= 17) {
        document.getElementById("userGrade").innerHTML = "Batxillerat"
    } else {
        document.getElementById("userGrade").innerHTML = "FP o Universitat"
    }
}