function translateNumber() {
  const userNumber = Number(document.getElementById("userNumber").value);

  switch (userNumber) {
    case 0:
      document.getElementById("translation").innerHTML = "Zero";
      break;

    case 1:
      document.getElementById("translation").innerHTML = "U";
      break;

    case 2:
      document.getElementById("translation").innerHTML = "Dos";
      break;

    case 3:
      document.getElementById("translation").innerHTML = "Tres";
      break;

    case 4:
      document.getElementById("translation").innerHTML = "Quatre";
      break;

    case 5:
      document.getElementById("translation").innerHTML = "Cinc";
      break;

    case 6:
      document.getElementById("translation").innerHTML = "Sis";
      break;

    case 7:
      document.getElementById("translation").innerHTML = "Set";
      break;

    case 8:
      document.getElementById("translation").innerHTML = "Vuit";
      break;

    case 9:
      document.getElementById("translation").innerHTML = "Nou";
      break;

    case 10:
      document.getElementById("translation").innerHTML = "Deu";
      break;

    default:
      document.getElementById("translation").innerHTML =
        "Introdueix un número entre el 0 i el 99.";
      break;
  }
}
