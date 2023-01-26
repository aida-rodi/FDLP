function calculate() {
  const dividend = Number(document.getElementById("firstUserNumber").value);
  const divisor = Number(document.getElementById("secondUserNumber").value);

  if (divisor < 2 || divisor > 7) {
    document.getElementById("result").innerHTML =
      "Ep! El divisor ha d'estar entre 2 i 7.";
    throw Error("Ep! El divisor ha d'estar entre 2 i 7.");
  }

  if (dividend % divisor === 0) {
    document.getElementById("result").innerHTML = `${dividend} és múltiple de ${divisor}`;
  } else {
    document.getElementById("result").innerHTML = `${dividend} no és múltiple de ${divisor}`;
  }
}
