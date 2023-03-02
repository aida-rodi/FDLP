import { Puppy } from "./Puppy.js";

export function addNewPuppy() {
    const tipoMascota = 'Perro'
    const raza = 'Golden Retriever'
    const origen = 'Escocia'
    const alturaCm = '56'
    const pesoKg = '32'
    const pelo = 'largo'
    const colores = 'dorado'
    const caracter = 'tranquilo'
    const esperanzaVida = '12 años'

    const puppy = new Puppy(tipoMascota, raza, origen, alturaCm, pesoKg, pelo, colores, caracter, esperanzaVida)

    document.getElementById("puppy").innerHTML = puppy.toString()
}