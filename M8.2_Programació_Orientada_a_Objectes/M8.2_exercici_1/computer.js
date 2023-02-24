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

    /* formatToString () {
        return `Las partes del ordenador son:
        Marca: ${this.#brand}
        Modelo: ${this.#model}
        CPU: ${this.#cpu}
        Ram: ${this.#ram}
        Disco duro: ${this.#hd}`
    } */
}