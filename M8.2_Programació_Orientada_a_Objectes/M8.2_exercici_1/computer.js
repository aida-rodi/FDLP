export class Computer {

    #id
    #brand
    #model
    #cpu
    #ram
    #hd
    
    constructor(id, brand, model, cpu, ram, hd) {

        this.#id = id
        this.#brand = brand
        this.#model = model
        this.#cpu = cpu
        this.#ram = ram
        this.#hd = hd
    }

    getId() {
        return this.#id
    }
    getBrand() {
        return this.#brand
    }
    getModel() {
        return this.#model
    }
    getCPU() {
        return this.#cpu
    }
    getRAM() {
        return this.#ram
    }
    getHD() {
        return this.#hd
    }

    setId(id) {
        this.#id = id
    }
    setBrand(brand) {
        this.#brand = brand
    }
    setModel(model) {
        this.#model = model
    }
    setCPU(cpu) {
        this.#cpu = cpu
    }
    setRAM(ram) {
        this.#ram = ram
    }
    setHD(hd) {
        this.#hd = hd
    }

    /* showBrowser(browser) {
        return `Se está utilizando: ${browser}`
    } */

/*     toString() {
        return `💻 - ${this.#id} <br>
        Marca: ${this.#brand} <br>
        Modelo: ${this.#model} <br>
        CPU: ${this.#cpu} <br>
        Ram: ${this.#ram} <br>
        Disco duro: ${this.#hd} <br><br>`
    } */
}