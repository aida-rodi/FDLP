function calculate() {
    const userYear = Number(document.getElementById("userYear").value);

    if (userYear % 400 === 0 || userYear % 4 === 0 && userYear % 100 !== 0) {
        document.getElementById("result").innerHTML = `${userYear} SÍ és un any de traspàs.`
    } else {
        document.getElementById("result").innerHTML = `${userYear} NO és un any de traspàs.`
    }
}