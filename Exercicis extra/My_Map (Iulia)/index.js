
//const array = Array(prompt("Introduce un array"))
const array = [1,2,3,4,5]

function myMap(arr, func){

    if(arr instanceof Array === false)
    throw Error("Esto no es array")

    if(typeof func !== 'function')
    throw Error("Esto no es funcion")

    const newArray = []

    for ( let i = 0; i < arr.length; i ++) {
        newArray.push( func( arr[i] ) )
    }
   
    return newArray
}
// throw error when first param is not an array
//myMap('hola mundo', multiplyByTwo) 

// throw error when second param is not a function
myMap(array, 'hola mundo') 

// myMap([1,2,3,4,5], multiplyByTwo)
const result1 = myMap(array, multiplyByTwo) 
console.log(result1) // [2,4,6,8,10]

// myMap([1,2,3,4,5], multiplyByTen)
const result2 = myMap(array, multiplyByTen) 
console.log(result2) // [10,20,30,40,50]

// myMap(['Barcelona','Paris','Roma','Londres','Berlin'], multiplyByTen)
const result3 = myMap( ['Barcelona','Paris','Roma','Londres','Berlin'] , convertToUpperCase) 
console.log(result3) // ['BARCELONA','PARIS','ROMA','LONDRES','BERLIN']

function multiplyByTwo( num ) {
    return num * 2
}

function multiplyByTen(num) { 
    return num * 10
}

function convertToUpperCase(string) {
    return string.toUpperCase()
}

    
