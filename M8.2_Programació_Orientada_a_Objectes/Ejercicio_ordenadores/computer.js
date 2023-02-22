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

    getBrand() {
        return this.#brand
    }
    getModel() {
        return this.#model
    }
    getCpu() {
        return this.#cpu
    }
    getRam() {
        return this.#ram
    }
    getHd() {
        return this.#hd
    }

    setBrand(brand) {
        this.#brand = brand
    }
    setModel(model) {
        this.#model = model
    }
    setCpu(cpu) {
        this.#cpu = cpu
    }
    setRam(ram) {
        this.#ram = ram
    }
    setHd(hd) {
        this.#hd = hd
    }

    showBrowserInUse(browser) {
        return `Se está utilizando: ${browser}`
    }

    formatToString () {
        return `Las partes del ordenador son:
        Marca: ${this.#brand}
        Modelo: ${this.#model}
        CPU: ${this.#cpu}
        Ram: ${this.#ram}
        Disco duro: ${this.#hd}`

    }
}