function calculate() {
  const userNumber = Number(document.getElementById("userNumber").value);
  const isEven = userNumber % 2 === 0;
  const isOdd = userNumber % 2 !== 0;
  if (isEven) {
    document.getElementById(
      "result"
    ).innerHTML = `El numero ${userNumber} es par.`;
  }
  if (isOdd) {
    document.getElementById(
      "result"
    ).innerHTML = `El numero ${userNumber} es impar.`;
  }
}
