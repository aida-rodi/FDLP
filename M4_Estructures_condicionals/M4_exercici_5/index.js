function calculate() {
  const firstNumber = Number(document.getElementById("firstUserNumber").value);
  const operator = String(document.getElementById("userOperator").value);
  const secondNumber = Number(document.getElementById("secondUserNumber").value);

  const addition = firstNumber + secondNumber;
  const subtraction = firstNumber - secondNumber;
  const multiplication = firstNumber * secondNumber;
  const division = firstNumber / secondNumber;

  switch (operator) {
    case "+":
      document.getElementById("result").innerHTML = addition;
      break;

    case "-":
      document.getElementById("result").innerHTML = subtraction;
      break;

    case "*":
      document.getElementById("result").innerHTML = multiplication;
      break;

    case "/":
      document.getElementById("result").innerHTML = division;
      break;

    default:
      document.getElementById("result").innerHTML =
        "Comprova que hagis introduït correctament totes les dades.";
      break;
  }
}
