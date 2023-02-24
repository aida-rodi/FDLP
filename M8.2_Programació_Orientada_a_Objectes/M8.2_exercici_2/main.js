import {Hotel} from "./hotel.js";

document.getElementById("addHotel").addEventListener("click", showAddHotel)
document.getElementById("addButton").addEventListener("click", addHotel)
document.getElementById("removeHotel").addEventListener("click", showRemoveHotel)
document.getElementById("removeButton").addEventListener("click", removeHotel)
document.getElementById("viewHotel").addEventListener("click", showViewHotel)
document.getElementById("viewButton").addEventListener("click", viewHotel)
document.getElementById("updateHotel").addEventListener("click", showUpdateHotel)
document.getElementById("updateButton").addEventListener("click", updateHotel)

const listOfHotels = []

function showAddHotel() {
    document.getElementById("removeHotelDiv").hidden=true
    document.getElementById("hotelRemovedMessage").hidden=true
    document.getElementById("hotelNotFoundMessage").hidden=true
    document.getElementById("viewHotelDiv").hidden=true
    document.getElementById("updateHotelDiv").hidden=true
    document.getElementById("hotelAddedMessage").hidden=true
    document.getElementById("addHotelDiv").hidden=false

    document.getElementById("name").value=''
    document.getElementById("numberOfRooms").value=''
    document.getElementById("numberOfFloors").value=''
    document.getElementById("totalArea").value=''
}

function addHotel() {
    const name = document.getElementById("name").value
    const numberOfRooms = document.getElementById("numberOfRooms").value
    const numberOfFloors = document.getElementById("numberOfFloors").value
    const totalArea = document.getElementById("totalArea").value

    const hotel = new Hotel(name, numberOfRooms, numberOfFloors, totalArea);
    listOfHotels.push(hotel)

    document.getElementById("addHotelDiv").hidden=true
    document.getElementById("hotelAddedMessage").hidden=false
    
    console.log(listOfHotels);

    document.getElementById("hotelAddedMessage").innerHTML= `${name} has been added to the database ✔`
}

function showRemoveHotel() {
    document.getElementById("addHotelDiv").hidden=true
    document.getElementById("hotelAddedMessage").hidden=true
    document.getElementById("viewHotelDiv").hidden=true
    document.getElementById("updateHotelDiv").hidden=true
    document.getElementById("removeHotelDiv").hidden=false
    document.getElementById("hotelRemovedMessage").hidden=true
    document.getElementById("hotelNotFoundMessage").hidden=true

    document.getElementById("hotelToRemove").value=''
}

function removeHotel() {
    const userHotel = document.getElementById("hotelToRemove").value
    const foundHotelIndex = listOfHotels.findIndex( findHotel )

    function findHotel(hotel) {
        if (hotel.getName() === userHotel) {
            return true
        }
    }

    console.log(foundHotelIndex)

    document.getElementById("removeHotelDiv").hidden=true

    if (foundHotelIndex === -1) {
        document.getElementById("hotelNotFoundMessage").hidden=false
        document.getElementById("hotelRemovedMessage").hidden=true
        document.getElementById("hotelNotFoundMessage").innerHTML= `No hotels matching the name '${userHotel}' were found in the database ⚠`
    } else {
        listOfHotels.splice(foundHotelIndex, 1)
        document.getElementById("hotelRemovedMessage").hidden=false
        document.getElementById("hotelNotFoundMessage").hidden=true
        document.getElementById("hotelRemovedMessage").innerHTML= `${userHotel} was successfully removed from the database ✔`
    }
    console.log(listOfHotels)
}

function showViewHotel() {
    document.getElementById("addHotelDiv").hidden=true
    document.getElementById("hotelAddedMessage").hidden=true
    document.getElementById("removeHotelDiv").hidden=true
    document.getElementById("hotelRemovedMessage").hidden=true
    document.getElementById("hotelNotFoundMessage").hidden=true
    document.getElementById("updateHotelDiv").hidden=true
    document.getElementById("viewHotelDiv").hidden=false
    document.getElementById("hotelToView").value=''
}

function viewHotel() {
}

function showUpdateHotel() {
    document.getElementById("addHotelDiv").hidden=true
    document.getElementById("hotelAddedMessage").hidden=true
    document.getElementById("removeHotelDiv").hidden=true
    document.getElementById("hotelRemovedMessage").hidden=true
    document.getElementById("hotelNotFoundMessage").hidden=true
    document.getElementById("viewHotelDiv").hidden=true
    document.getElementById("updateHotelDiv").hidden=false
    document.getElementById("hotelToUpdate").value=''
}

function updateHotel() {
    const userHotel = document.getElementById("hotelToUpdate").value
    const foundHotel = listOfHotels.find( findHotel )

    function findHotel(hotel) {
        if (hotel.getName() === userHotel) {
            return true
        }
    }

    console.log(foundHotel)
}

/* function formatToString() {
	const formatedComputers = listOfComputers.map((computer) => {
		return `💻 - ${computer.getId()}<br> 
        Marca: ${computer.getBrand()}<br>
        Modelo: ${computer.getModel()}<br>
        CPU: ${computer.getCPU()}<br>
        RAM: ${computer.getRAM()}<br>
        Disco duro: ${computer.getHD()}`;
	});
	document.getElementById('result').innerHTML = formatedComputers.join('<br><br>');
} */