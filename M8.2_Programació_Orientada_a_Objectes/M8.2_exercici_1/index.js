import {Computer} from './computer.js'

document.getElementById("createComputer").addEventListener("click", createComputer)
document.getElementById("updateComputer").addEventListener("click", updateComputer)
document.getElementById("showBrowser").addEventListener("click", showBrowser)

const listOfComputers = []

function createComputer() {

    const id = prompt('Escribe el id del ordenador', 'Default id');
    const brand = prompt('Escribe la marca', 'Default brand');
    const model = prompt('Escribe el modelo', 'Default model');
    const cpu = prompt('Escribe la CPU', 'Default CPU');
    const ram = prompt('Escribe la RAM', 'Default RAM');
    const hd = prompt('Escribe el disco duro', 'Default HD');
    
    const computer = new Computer(id, brand, model, cpu, ram, hd);
    listOfComputers.push(computer)
    formatToString()

}

function updateComputer() {

    const userId = prompt('Escribe el id del ordenador que deseas modificar')
        
    function findId(computer) {
        if (computer.getId() === userId) {
            return true
        }
    }
    const foundComputer = listOfComputers.find( findId )

    const changeCPU = confirm('¿Quieres modificar la CPU?')
    if (changeCPU === true) {
        const newCPU = prompt('Introduce la nueva CPU')
        foundComputer.setCPU(newCPU)
    }

    const changeRAM = confirm('¿Quieres modificar la RAM?')
    if (changeRAM === true) {
        const newRAM = prompt('Introduce la nueva RAM')
        foundComputer.setRAM(newRAM)
    }

    const changeHD = confirm('¿Quieres modificar el disco duro?')
    if (changeHD === true) {
        const newHD = prompt('Introduce el nuevo disco duro')
        foundComputer.setHD(newHD)
    }
    formatToString()
}

function formatToString() {

	const formatedComputers = listOfComputers.map((computer) => {
		return `💻 - ${computer.getId()}<br> 
        Marca: ${computer.getBrand()}<br>
        Modelo: ${computer.getModel()}<br>
        CPU: ${computer.getCPU()}<br>
        RAM: ${computer.getRAM()}<br>
        Disco duro: ${computer.getHD()}`;
	});
	document.getElementById('result').innerHTML = formatedComputers.join('<br><br>');
}

function showBrowser() {
    const userAgent = window.navigator.userAgent.match(/chrome|firefox|safari|opr|edg/i)
    alert(printBrowser(userAgent))
}

function printBrowser(browser) {
    return `Se está utilizando: ${browser}`
}