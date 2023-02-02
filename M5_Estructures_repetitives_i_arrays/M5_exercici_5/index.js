const MAX_SCHOLARSHIPS = 5

function checkScholarship() {

    const scholarshipList = []

    while (scholarshipList.length < MAX_SCHOLARSHIPS) {
        const userName = prompt('Introdueix el teu nom')
        const isAdult = confirm("Ets major d'edat?")
        const hasDegree = confirm('Tens un títol universitari?')
        const isUnemployed = confirm("Et trobes en situació d'atur?")

        const hasScholarship = isAdult && hasDegree || isUnemployed

        if (hasScholarship) {
            alert("Enhorabona, se t'ha concedit una beca.")
            scholarshipList.push(userName)
        } else {
            alert("Ho sentim, no reuneixes els requisits per obtenir una beca.")
        }
    }

    document.getElementById("scholarshipList").innerHTML = 
    `Totes les beques disponibles han estat assignades. Els/les afortunats/des són: 
    ${scholarshipList.join('<br>')}`;
}