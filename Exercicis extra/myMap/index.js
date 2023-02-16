const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayOfCities = ["Barcelona", "Paris", "Roma", "Londres", "Berlin"];
const users = [
    { name: 'Pepita', surname: 'Grillo', age: 95 },
    { name: 'Maria', surname: 'Martinez', age: 35 },
    { name: 'Pepito', surname: 'Grillo', age: 110 },
    { name: 'Pepito', surname: 'Sanchez', age: 45 }
 ]


function myFilter(array, callback) {
    if (array instanceof Array === false)
        throw Error("El primer parámetro no es un array");

    if (typeof callback !== "function")
        throw Error("El segundo parámetro no es una función");

    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}


function isBiggerThanFive(n) {
    return n > 5;
}

function isEvenNumber(n) {
    return n % 2 === 0;
}

function startsWithB(string) {
    return string.startsWith('B');
}

function isGrilloFamily(object) {
    return object.surname === "Grillo";
}


console.log(myFilter(arrayOfNumbers, isBiggerThanFive))
console.log(myFilter(arrayOfNumbers, isEvenNumber))
console.log(myFilter(arrayOfCities, startsWithB))
console.log(myFilter(users, isGrilloFamily))