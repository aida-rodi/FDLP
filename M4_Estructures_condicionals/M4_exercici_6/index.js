function calculate() {
  const day = Number(document.getElementById("userDay").value);
  const month = (document.getElementById("userMonth").value).toLowerCase();

  switch (month) {
    case "gener":
      if (day <= 19) {
        document.getElementById("result").innerHTML = "Capricorn";
      } else if (day >= 20 && day <= 31) {
        document.getElementById("result").innerHTML = "Aquari";
      } else {
        document.getElementById("result").innerHTML =
          "Comprova que hagis introduït el dia correctament.";
      }
      break;

    case "febrer":
      if (day <= 18) {
        document.getElementById("result").innerHTML = "Aquari";
      } else if (day >= 19 && day <= 28) {
        document.getElementById("result").innerHTML = "Peixos";
      } else {
        document.getElementById("result").innerHTML =
          "Comprova que hagis introduït el dia correctament.";
      }
      break;

    case "març":
      if (day <= 20) {
        document.getElementById("result").innerHTML = "Peixos";
      } else if (day >= 21 && day <= 31) {
        document.getElementById("result").innerHTML = "Aries";
      } else {
        document.getElementById("result").innerHTML =
          "Comprova que hagis introduït el dia correctament.";
      }
      break;

    case "abril":
      if (day <= 19) {
        document.getElementById("result").innerHTML = "Aries";
      } else if (day >= 20 && day <= 30) {
        document.getElementById("result").innerHTML = "Taure";
      } else {
        document.getElementById("result").innerHTML =
          "Comprova que hagis introduït el dia correctament.";
      }
      break;

    case "maig":
      if (day <= 20) {
        document.getElementById("result").innerHTML = "Taure";
      } else if (day >= 21 && day <= 31) {
        document.getElementById("result").innerHTML = "Bessons";
      } else {
        document.getElementById("result").innerHTML =
          "Comprova que hagis introduït el dia correctament.";
      }
      break;

    case "juny":
      if (day <= 20) {
        document.getElementById("result").innerHTML = "Bessons";
      } else if (day >= 21 && day <= 30) {
        document.getElementById("result").innerHTML = "Cranc";
      } else {
        document.getElementById("result").innerHTML =
          "Comprova que hagis introduït el dia correctament.";
      }
      break;

    case "juliol":
      if (day <= 22) {
        document.getElementById("result").innerHTML = "Cranc";
      } else if (day >= 23 && day <= 31) {
        document.getElementById("result").innerHTML = "Lleó";
      } else {
        document.getElementById("result").innerHTML =
          "Comprova que hagis introduït el dia correctament.";
      }
      break;

    case "agost":
      if (day <= 22) {
        document.getElementById("result").innerHTML = "Lleó";
      } else if (day >= 23 && day <= 31) {
        document.getElementById("result").innerHTML = "Verge";
      } else {
        document.getElementById("result").innerHTML =
          "Comprova que hagis introduït el dia correctament.";
      }
      break;

    case "setembre":
      if (day <= 22) {
        document.getElementById("result").innerHTML = "Verge";
      } else if (day >= 23 && day <= 30) {
        document.getElementById("result").innerHTML = "Balança";
      } else {
        document.getElementById("result").innerHTML =
          "Comprova que hagis introduït el dia correctament.";
      }
      break;

    case "octubre":
      if (day <= 22) {
        document.getElementById("result").innerHTML = "Balança";
      } else if (day >= 23 && day <= 31) {
        document.getElementById("result").innerHTML = "Escorpí";
      } else {
        document.getElementById("result").innerHTML =
          "Comprova que hagis introduït el dia correctament.";
      }
      break;

    case "novembre":
      if (day <= 21) {
        document.getElementById("result").innerHTML = "Escorpí";
      } else if (day >= 22 && day <= 30) {
        document.getElementById("result").innerHTML = "Sagitari";
      } else {
        document.getElementById("result").innerHTML =
          "Comprova que hagis introduït el dia correctament.";
      }
      break;

    case "desembre":
      if (day <= 21) {
        document.getElementById("result").innerHTML = "Sagitari";
      } else if (day >= 22 && day <= 31) {
        document.getElementById("result").innerHTML = "Capricorn";
      } else {
        document.getElementById("result").innerHTML =
          "Comprova que hagis introduït el dia correctament.";
      }
      break;

    default:
      document.getElementById("result").innerHTML =
        "Comprova que hagis introduït el mes correctament.";
      break;
  }
}
