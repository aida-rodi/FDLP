export class Hotel {

    #name
    #numberOfRooms
    #numberOfFloors
    #totalArea
    
    constructor(name, numberOfRooms, numberOfFloors, totalArea) {

        this.#name = name
        this.#numberOfRooms = numberOfRooms
        this.#numberOfFloors = numberOfFloors
        this.#totalArea = totalArea
    }

    getName() {
        return this.#name
    }
    getNumberOfRooms() {
        return this.#numberOfRooms
    }
    getNumberOfFloors() {
        return this.#numberOfFloors
    }
    getTotalArea() {
        return this.#totalArea
    }

    setName(name) {
        this.#name = name
    }
    setNumberOfRooms(numberOfRooms) {
        this.#numberOfRooms = numberOfRooms
    }
    setNumberOfFloors(numberOfFloors) {
        this.#numberOfFloors = numberOfFloors
    }
    setTotalArea(totalArea) {
        this.#totalArea = totalArea
    }

    toString() {
        return `🏨 - ${this.#name}<br> 
        Number of rooms: ${this.#numberOfRooms}<br>
        Number of floors: ${this.#numberOfFloors}<br>
        Total area: ${this.#totalArea}m2`
    }

    calculateMaintenance() {

    }
}