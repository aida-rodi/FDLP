import { Hotel } from "./hotel.js";

document.getElementById("addHotel").addEventListener("click", showAddHotel);
document.getElementById("addButton").addEventListener("click", addHotel);
document.getElementById("removeHotel").addEventListener("click", showRemoveHotel);
document.getElementById("removeButton").addEventListener("click", removeHotel);
document.getElementById("viewHotel").addEventListener("click", showViewHotel);
document.getElementById("viewButton").addEventListener("click", viewHotel);
document.getElementById("updateHotel").addEventListener("click", showUpdateHotel);
document.getElementById("updateButton").addEventListener("click", updateHotel);
document.getElementById("modifyButton").addEventListener("click", modifyHotel);

const listOfHotels = [];

function showAddHotel() {
    document.getElementById("removeHotelDiv").hidden = true;
    document.getElementById("hotelRemovedMessage").hidden = true;
    document.getElementById("hotelNotFoundMessage").hidden = true;
    document.getElementById("viewHotelDiv").hidden = true;
    document.getElementById("printHotel").hidden = true;
    document.getElementById("updateHotelDiv").hidden = true;
    document.getElementById("modificationsDiv").hidden = true;
    document.getElementById("hotelAddedMessage").hidden = true;
    document.getElementById("addHotelDiv").hidden = false;

    document.getElementById("name").value = "";
    document.getElementById("numberOfRooms").value = "";
    document.getElementById("numberOfFloors").value = "";
    document.getElementById("totalArea").value = "";
}

function addHotel() {
    const name = document.getElementById("name").value;
    const numberOfRooms = document.getElementById("numberOfRooms").value;
    const numberOfFloors = document.getElementById("numberOfFloors").value;
    const totalArea = document.getElementById("totalArea").value;

    const hotel = new Hotel(name, numberOfRooms, numberOfFloors, totalArea);
    listOfHotels.push(hotel);

    document.getElementById("addHotelDiv").hidden = true;
    document.getElementById("hotelAddedMessage").hidden = false;

    console.log(listOfHotels);

    document.getElementById("hotelAddedMessage").innerHTML = `'${name}' has been added to the database ✔`;
}

function showRemoveHotel() {
    document.getElementById("addHotelDiv").hidden = true;
    document.getElementById("hotelAddedMessage").hidden = true;
    document.getElementById("viewHotelDiv").hidden = true;
    document.getElementById("printHotel").hidden = true;
    document.getElementById("updateHotelDiv").hidden = true;
    document.getElementById("modificationsDiv").hidden = true;
    document.getElementById("removeHotelDiv").hidden = false;
    document.getElementById("hotelRemovedMessage").hidden = true;
    document.getElementById("hotelNotFoundMessage").hidden = true;

    document.getElementById("hotelToRemove").value = "";
}

function removeHotel() {
    const userHotel = document.getElementById("hotelToRemove").value;

    const foundHotelIndex = listOfHotels.findIndex(findHotel);

    function findHotel(hotel) {
        if (hotel.getName() === userHotel) {
            return true;
        }
    }
    console.log(foundHotelIndex);    

    if (foundHotelIndex === -1) {
        document.getElementById("hotelNotFoundMessage").hidden = false;
        document.getElementById("hotelRemovedMessage").hidden = true;
        document.getElementById("hotelToRemove").value = ''
        document.getElementById("hotelNotFoundMessage").innerHTML = `No hotels matching the name '${userHotel}' were found in the database ⚠`;
    } else {
        listOfHotels.splice(foundHotelIndex, 1);
        document.getElementById("removeHotelDiv").hidden = true;
        document.getElementById("hotelRemovedMessage").hidden = false;
        document.getElementById("hotelNotFoundMessage").hidden = true;
        document.getElementById("hotelRemovedMessage").innerHTML = `${userHotel} was successfully removed from the database ✔`;
    }
    console.log(listOfHotels);
}

function showViewHotel() {
    document.getElementById("addHotelDiv").hidden = true;
    document.getElementById("hotelAddedMessage").hidden = true;
    document.getElementById("removeHotelDiv").hidden = true;
    document.getElementById("hotelRemovedMessage").hidden = true;
    document.getElementById("hotelNotFoundMessage").hidden = true;
    document.getElementById("updateHotelDiv").hidden = true;
    document.getElementById("modificationsDiv").hidden = true;
    document.getElementById("viewHotelDiv").hidden = false;
    document.getElementById("printHotel").hidden = true;

    document.getElementById("hotelToView").value = "";
}

function viewHotel() {
    const userHotel = document.getElementById("hotelToView").value;

    if (userHotel === "all") {
        document.getElementById("viewHotelDiv").hidden = true
        document.getElementById("hotelNotFoundMessage").hidden = true;
        document.getElementById("printHotel").hidden = false;
        formatToString();
        return
    } 
    const foundHotel = listOfHotels.find(findHotel);

    function findHotel(hotel) {
        if (hotel.getName() === userHotel) {
            return true;
        }
    }
    console.log(foundHotel);

    if (foundHotel === undefined) {
        document.getElementById("hotelNotFoundMessage").hidden = false;
        document.getElementById("hotelToView").value = ''
        document.getElementById("hotelNotFoundMessage").innerHTML = `No hotels matching the name '${userHotel}' were found in the database ⚠`;
        return
    }

    document.getElementById("hotelNotFoundMessage").hidden = true;
    document.getElementById("printHotel").hidden = false;
    document.getElementById("viewHotelDiv").hidden = true;
    document.getElementById("printHotel").innerHTML = foundHotel.toString();
}

function showUpdateHotel() {
    document.getElementById("addHotelDiv").hidden = true;
    document.getElementById("hotelAddedMessage").hidden = true;
    document.getElementById("removeHotelDiv").hidden = true;
    document.getElementById("hotelRemovedMessage").hidden = true;
    document.getElementById("hotelNotFoundMessage").hidden = true;
    document.getElementById("viewHotelDiv").hidden = true;
    document.getElementById("printHotel").hidden = true;
    document.getElementById("modificationsDiv").hidden = true;
    document.getElementById("updateHotelDiv").hidden = false;

    document.getElementById("hotelToUpdate").value = "";
}

function updateHotel() {
    const userHotel = document.getElementById("hotelToUpdate").value;
    
    const foundHotel = listOfHotels.find(findHotel);

    function findHotel(hotel) {
        if (hotel.getName() === userHotel) {
            return true;
        }
    }
    //console.log(foundHotel);

    if (foundHotel === undefined) {
        document.getElementById("hotelNotFoundMessage").hidden = false;
        document.getElementById("hotelToUpdate").value = ''
        document.getElementById("hotelNotFoundMessage").innerHTML = `No hotels matching the name '${userHotel}' were found in the database ⚠`;
        return
    }

    document.getElementById("updateHotelDiv").hidden = true;
    document.getElementById("hotelNotFoundMessage").hidden = true;
    document.getElementById("modificationsDiv").hidden=false

    document.getElementById("newName").value = "";
    document.getElementById("newNumberOfRooms").value = "";
    document.getElementById("newNumberOfFloors").value = "";
    document.getElementById("newTotalArea").value = "";

}
function modifyHotel() {
    const newName = document.getElementById("newName").value;
    const newNumberOfRooms = document.getElementById("newNumberOfRooms").value;
    const newNumberOfFloors = document.getElementById("newNumberOfFloors").value;
    const newTotalArea = document.getElementById("newTotalArea").value;

    foundHotel.setName(newName)
    foundHotel.setNumberOfRooms(newNumberOfRooms)
    foundHotel.setNumberOfFloors(newNumberOfFloors)
    foundHotel.setTotalArea(newTotalArea)

    console.log(foundHotel)

    document.getElementById("modificationsDiv").hidden=true
}

function formatToString() {
    const formatedHotels = listOfHotels.map((hotel) => {
        return `🏨 - ${hotel.getName()}<br> 
        Number of rooms: ${hotel.getNumberOfRooms()}<br>
        Number of floors: ${hotel.getNumberOfFloors()}<br>
        Total area: ${hotel.getTotalArea()}m2`;
        });
    document.getElementById("printHotel").innerHTML = formatedHotels.join("<br><br>");
}
