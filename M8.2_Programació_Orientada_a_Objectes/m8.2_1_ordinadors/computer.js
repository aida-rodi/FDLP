
//Esta clase es exportable
export class Computer {
    #id
    #brand
    #model
    #processor
    #ram
    #hd
    
    constructor(id,brand, model, processor, ram, hd) {
        this.#id = id
        this.#brand = brand//brand es un parámetro de la función CONSTRUCTOR
        this.#model = model//relacionamos cada propiedad de los elementos de la clase con un parámetro de la función
        this.#processor = processor
        this.#ram = ram
        this.#hd = hd    
    }

    //get es para obtener el valor del parámetro, como un return
    getBrand() {
        return this.#brand
    }

    getModel() {
        return this.#model
    }

    getProcessor() {
        return this.#processor
    }

    getRam() {
        return this.#ram
    }
    getHd() {
        return this.#hd
    }
    getId() {
        return this.#id
    }

    setBrand(brand) {//set devuelve el valor del parámetro y permite modificarlo
        this.#brand = brand
    }
    setModel(model) {
        this.#processor = model
    }
    setProcessor(processor) {
        this.#processor = processor
    }
    setRAM(ram) {
        this.#ram = ram
    }
    setHd(hd) {
        this.#hd = hd
    }
    setId(id) {
        this.#id = id
    }

    
}    




