function play() {
  const userChoice = Number(document.getElementById("numUser").value);
  const randomNum = Math.ceil(Math.random() * 3);

  const figureDictionary = {
    1: 'piedra', 2: 'papel', 3: 'tijeras'
  }

  const userFigure = figureDictionary[userChoice]
  const randomFigure = figureDictionary[randomNum]

  const draw = userChoice === randomNum;
  const drawMessage = `¡Yo ${randomFigure} y tu ${userFigure}, es un empate!`;

  const userWins =
    (userChoice === 1 && randomNum === 3) ||
    (userChoice === 2 && randomNum === 1) ||
    (userChoice === 3 && randomNum === 2);
  const userWinsMessage = `¡Yo ${randomFigure} y tu ${userFigure}, has ganado!`;

  const randomNumWins =
    (userChoice === 3 && randomNum === 1) ||
    (userChoice === 1 && randomNum === 2) ||
    (userChoice === 2 && randomNum === 3);
  const randomNumWinsMessage = `¡Yo ${randomFigure} y tu ${userFigure}, he ganado!`;

  const userChoiceWrong = userChoice < 1 || userChoice > 3;
  const userChoiceWrongMessage = "Entiendo que no quieres jugar. Adiós.";

  if (userChoiceWrong) {
    document.getElementById("result").innerHTML = userChoiceWrongMessage;
    throw Error("El usuario ha entrado un numero erroneo");
  }
  if (draw) {
    document.getElementById("result").innerHTML = drawMessage;
  }
  if (userWins) {
    document.getElementById("result").innerHTML = userWinsMessage;
  }
  if (randomNumWins) {
    document.getElementById("result").innerHTML = randomNumWinsMessage;
  }
}
