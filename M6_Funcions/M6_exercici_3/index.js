const time = [];

function addDate() {
    const currentDate = new Date();
    time.push(currentDate);
    console.log(time);
}

function findNumberPosition(number, arrayOfNumbers) {
    let result = -1;
    for (let position = 0; position < arrayOfNumbers.length; position++) {
        if (arrayOfNumbers[position] === number) {
            result = position;
            console.log(result);
        }
    }
    return result;
}

function sentenceToLowerCase(userSentence) {
    userSentence = userSentence.toLowerCase();
    userSentence = userSentence.replaceAll(" ", "");
    userSentence = userSentence.replaceAll(",", "");
    userSentence = userSentence.replaceAll(".", "");
    console.log(userSentence);
}

function findSchoolSubjects(arrayOfSubjects, userSubject) {
    let userSubjectLength = userSubject.length -1
    const foundSubjects = [];

for (let index = 0; index < arrayOfSubjects.length; index++) {
    let currentSubject = arrayOfSubjects[index];
    if (
        currentSubject[0,userSubjectLength] === userSubject[0,userSubjectLength]
    ) {
        foundSubjects.push(arrayOfSubjects[index])
    }
}  
    console.log(foundSubjects)
}

function menu(id) {
    if (id === 1) {
        addDate();
    }
    if (id === 2) {
        findNumberPosition(8, [9, 52, 1, 47, 85, 8]);
    }
    if (id === 3) {
        sentenceToLowerCase("A Cornellà, Tània i Aina tallen roca.");
    }
    if (id === 4) {
        findSchoolSubjects(
            [
                "Història universal",
                "Història d'Espanya",
                "Geografia",
                "Història de la llengua catalana",
                "Antropologia",
                "Anglès",
            ],
            "Història"
        );
    }
}
