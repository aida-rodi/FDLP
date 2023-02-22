import {Computer} from './computer.js'

document.getElementById("createComputer").addEventListener("click", createComputer)
document.getElementById("updateComputer").addEventListener("click", updateComputer)
document.getElementById("showComputer").addEventListener("click", showComputer)
document.getElementById("showBrowser").addEventListener("click", showBrowser)

let computer = undefined

function createComputer() {
    const brand = prompt('Escribe la marca', 'DELL')
    const model = prompt('Escribe el modelo', 'LATITUDE')
    const cpu = prompt('Escribe la cpu', '16')
    const ram = prompt('Escribe la ram', '35')
    const hd = prompt('Escribe el disco duro', '4')
    const id = 1 //número del ordenador que se está creando
    computer = new Computer(id, brand, model, cpu, ram, hd)

}

function updateComputer() {
    const newCpu = prompt('Introduce nueva cpu')
    computer.setCpu(newCpu)

    const newRam = prompt('Introduce nueva ram')
    computer.setRam(newRam)

    const newHd = prompt('Introduce nuevo disco duro')
    computer.setHd(newHd)
}

function showComputer() {
    alert(computer.formatToString())
}

function showBrowser() {
    const userAgent = window.navigator.userAgent.match(/chrome|firefox|safari|opr|edg/i)

    alert(computer.showBrowserInUse(userAgent))
}