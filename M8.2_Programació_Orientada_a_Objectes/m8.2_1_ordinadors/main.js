import { Computer } from './computer.js';


document.getElementById('createComputer').addEventListener('click', createComputer);

document.getElementById('showNav').addEventListener('click', showBrowserInUse);
document.getElementById('modifyComputer').addEventListener('click', updateComputer);

const listComputers = []

function createComputer() {

	const id = prompt('Enter Id', 'Id por defecto');
	const brand = prompt('Enter Brand', 'Brand por defecto');
	const model = prompt('Enter Model', 'Model por defecto');
	const processor = prompt('Enter CPU', 'CPU por defecto');
	const ram = prompt('Enter RAM', 'RAM por defecto');
	const hd = prompt('Enter HD', 'HD por defecto');

	const computer = new Computer(id, brand, model, processor, ram, hd);
	listComputers.push(computer);
	formatToString()
}

function updateComputer() {

	const newId = prompt('Enter computer Id');

  function findId(computer){
    if ( computer.getId() === newId ) {
        return true
    }
  }
  
  const computerFound = listComputers.find( findId  )

  const changeCPU = confirm('Do you want change cpu?')
  if ( changeCPU === true ){

    const newCPU = prompt('Enter new CPU')
    computerFound.setProcessor(newCPU)
  }

  const changeHD = confirm('Do you want change HD?')
  if ( changeHD === true ){

    const newHD = prompt('Enter new HD')
    computerFound.setHd(newHD)
  }

  const changeRAM = confirm('Do you want change RAM?')
  if ( changeRAM === true ){

    const newRAM = prompt('Enter new RAM')
    computerFound.setRAM(newRAM)
  }
  formatToString()
}

function formatToString() {
	const formatedComputers = listComputers.map((pc) => {
		return `💻 - ${pc.getId()} <br> 
        Marca: ${pc.getBrand()}<br>
        Modelo: ${pc.getModel()}<br>
        CPU: ${pc.getProcessor()}<br>
        Ram: ${pc.getRam()}<br>
        Disco duro: ${pc.getHd()}`;
	});
	document.getElementById('results').innerHTML = formatedComputers.join('<br><br>');
}

//FALTA CORREGIR SHOWBROWSER INUSE()
/* function showBrowserInUse() {
	let userAgent = navigator.userAgent;
	let browserName;

	if (userAgent.match(/chrome|chromium|crios/i)) {
		browserName = 'chrome';
	} else if (userAgent.match(/firefox|fxios/i)) {
		browserName = 'firefox';
	} else if (userAgent.match(/safari/i)) {
		browserName = 'safari';
	} else if (userAgent.match(/opr\//i)) {
		browserName = 'opera';
	} else if (userAgent.match(/edg/i)) {
		browserName = 'edge';
	} else {
		browserName = 'No browser detection';
	}
	return alert(`Se está utilizando: ${browserName}`); 
}  */

