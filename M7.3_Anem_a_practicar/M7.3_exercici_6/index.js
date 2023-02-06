function getArray() {
const arrayLength = Number(document.getElementById("arrayLength").value)

if (isNaN(arrayLength) || arrayLength < 1) {
    alert("Comprova que hagis introduït el número correctament.")
    document.getElementById("result1").innerHTML = " "
    document.getElementById("result2").innerHTML = " "
    return
}

const arrayOfNumbers = [];

while (arrayOfNumbers.length < arrayLength) {
    arrayOfNumbers.push(Number(prompt("Introdueix un número", "Escriu un número")))
}

const oddNumbers = [];
const evenNumbers = [];
let oddNumbersAddition = 0;
let evenNumbersAddition = 0;

for (const num of arrayOfNumbers) {
  if (num % 2 !== 0) {
    oddNumbersAddition += num;
    oddNumbers.push(num);
  }
  if (num % 2 === 0) {
    evenNumbersAddition += num;
    evenNumbers.push(num);
  }
}

document.getElementById("result1").innerHTML = `Els nombres parells són: ${evenNumbers.join(", ")}. La suma de tots ells és ${evenNumbersAddition}.`;
document.getElementById("result2").innerHTML = `Els nombres imparells són: ${oddNumbers.join(", ")}. La suma de tots ells és ${oddNumbersAddition}.`;

}