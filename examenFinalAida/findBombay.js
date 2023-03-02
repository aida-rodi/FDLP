import { mascotas } from "./dades.js";

export function findBombay() {
    const catsObject = mascotas[0]
    const catsArray = catsObject.razas

    const puppy = catsArray.find(isCatBombay)

    function isCatBombay(cat) {
        if (cat.raza === 'Bombay') {
            return true
        }
    }

    console.table(puppy)
}