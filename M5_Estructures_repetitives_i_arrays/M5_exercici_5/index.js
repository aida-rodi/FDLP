function sendData() {
    const userAdult = document.getElementById("userAge").value;
    const userTitle = document.getElementById("userTitle").value;
    const userUnemployed = document.getElementById("userJob").value;
  
    const userHasScholarship =
      (userAdult === "Sí" && userTitle === "Sí") || userUnemployed === "Sí";
  
    document.getElementById("result").innerHTML = userHasScholarship
      ? "Felicitats, compleixes els requisits per a l'obtenció d'una beca."
      : "Ho sentim, no compleixes els requisits per a l'obtenció d'una beca.";
  }