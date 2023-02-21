// BUSCAR NÚMEROS MÁS GRANDES QUE 10
let numbers = [1, 5, 23, 4, 12, 45, 78, 8, 8.9, 10, 11, 3.4, 10.1, 84, 6]

// Hecho con bucle for:
let greaterThanTen = [];

for (let i = 0; i < numbers.length; i++) {
  let currentNumber = numbers[i];

  if (currentNumber > 10) {
    greaterThanTen.push(currentNumber)
  }
}
console.log(greaterThanTen);


// Hecho con método de array .filter()
let greaterThanTenFilter = numbers.filter( overTen )

function overTen(numbers) {
    if (numbers > 10) {
        return true
    }
}

console.log(greaterThanTenFilter);

// Simplificado
let greaterThanTenFilterSimplified = numbers.filter(number => number > 10 );

console.log(greaterThanTenFilterSimplified)






// BUSCAR MENORES DE EDAD
let people = [
    {name: "Aaron", age: 65},
    {name: "Beth", age: 2},
    {name: "Carla", age: 13},
    {name: "Daniel", age: 3},
    {name: "Isabella", age: 25},
    {name: "Laura", age: 17},
    {name: "George", age: 43},
]

let minors = people.filter(people => people.age < 18)

console.log(minors);