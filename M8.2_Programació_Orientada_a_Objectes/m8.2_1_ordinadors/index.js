const listComputers = []


function createComputers() {
    const brand = prompt('Enter Brand')
    const model = prompt('Enter Model')
    const processor = prompt('Enter CPU')
    const ram = prompt('Enter RAM')
    const hd = prompt('Enter HD')

    const pc = new Computer(brand, model, processor, ram, hd)
    listComputers.push(pc)
    //showPcs(listComputers)
}

class Computer {

    #brand
    #model
    #processor
    #ram
    #hd
    constructor(brand, model, processor, ram, hd) {
        this.#brand = brand
        this.#model = model
        this.#processor = processor
        this.#ram = ram
        this.#hd = hd
    }

    /*  #validate(value, name) {
         if (!value) throw Error(`${name} can not be empty`)
     }
 
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
     getRam() {
         return this.#hd
     }
 
 
     setBrand(brand) {
         this.#brand = this.#validate(brand, 'Brand')
     }
     setModel(model) {
         this.#processor = this.#validate(model, 'Model')
     }
     setProcessor(processor) {
         this.#processor = this.#validate(processor, 'Processor')
     }
     setRam(ram) {
         this.#ram = this.#validate(ram, 'RAM')
     }
     setProcessor(processor) {
         this.#hd = this.#validate(ram, 'HD')
     }
 */


    /* showPcs=(computers)=>console.log(listComputers) */


}
function showPcs(listComputers) {
    const formatedPcs = listComputers.map((pc, i) => {
        return `💻 ${i}.- ${pc.brand} <br> 
                Model: ${pc.model} <br> 
                CPU: ${pc.processor} <br>
                RAM: ${pc.ram} <br> 
                HD: ${pc.hd} <br>`;
    });
    document.getElementById('computersList').innerHTML = formatedPcs.join('<br><br>');
}


