export class Puppy {

    #tipoMascota
    #raza
    #origen
    #alturaCm
    #pesoKg
    #pelo
    #colores
    #caracter
    #esperanzaVida

    constructor(tipoMascota, raza, origen, alturaCm, pesoKg, pelo, colores, caracter, esperanzaVida){

        this.#tipoMascota = tipoMascota
        this.#raza =  raza
        this.#origen = origen
        this.#alturaCm = alturaCm
        this.#pesoKg = pesoKg
        this.#pelo = pelo
        this.#colores = colores
        this.#caracter = caracter
        this.#esperanzaVida = esperanzaVida
    }

    toString() {
        return `<strong>Tipo de mascota:</strong> ${this.#tipoMascota}<br>
        <strong>Raza:</strong> ${this.#raza}<br>
        <strong>Origen:</strong> ${this.#origen}<br>
        <strong>Altura:</strong> ${this.#alturaCm}cm<br>
        <strong>Peso:</strong> ${this.#pesoKg}kg<br>
        <strong>Pelo:</strong> ${this.#pelo}<br>
        <strong>Colores:</strong> ${this.#colores}<br>
        <strong>Carácter:</strong> ${this.#caracter}<br>
        <strong>Esperanza de vida:</strong> ${this.#esperanzaVida}<br><br>`
    }
}