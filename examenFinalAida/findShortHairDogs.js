import { mascotas } from "./dades.js";

export function findShortHairDogs() {
    const dogsObject = mascotas[1]
    const dogsArray = dogsObject.razas

    const shortHairDogs = []
    
    dogsArray.filter(function (dog) { 
        if (dog.pelo === 'corto') {
            shortHairDogs.push(dog.raza)
        }
    })

    alert(`Les races de gos de pèl curt són:\n${shortHairDogs.join('\n')}`)
}