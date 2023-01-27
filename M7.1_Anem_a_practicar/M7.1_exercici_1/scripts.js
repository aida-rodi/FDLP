function calculate() {
  const firstUserNum = Number(document.getElementById("firstNum").value);
  const secondUserNum = Number(document.getElementById("secondNum").value);
  const thirdUserNum = Number(document.getElementById("thirdNum").value);

  let average = (firstUserNum + secondUserNum + thirdUserNum) / 3;

  if (average < 0 || average > 10) {
    alert("Has introduït una nota incorrecta.");
    throw Error("L'usuari ha introduït una nota incorrecte.");
  }

  if (average < 5) {
    document.getElementById("result").innerHTML = `La mitjana de les 3 notes és ${average.toFixed(2)}. No has superat el curs. Has de recuperar.`;
  }

  if (average >=5 && average <=7) {
    document.getElementById("result").innerHTML = `La mitjana de les 3 notes és ${average.toFixed(2)}. Enhorabona! Has aprovat, però hauries de continuar practicant.`;
  }

  if (average >7 && average <= 10) {
    document.getElementById("result").innerHTML = `La mitjana de les 3 notes és ${average.toFixed(2)}. Enhorabona! Has superat el curs! Passa ja al següent nivell!`;
  }
}