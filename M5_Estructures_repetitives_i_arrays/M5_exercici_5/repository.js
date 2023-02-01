function sendData() {
    const userAdult = document.getElementById("userAge").value;
    const userTitle = document.getElementById("userTitle").value;
    const userUnemployed = document.getElementById("userUnemployed").value;

    const person1 = {adult: userAdult, title: userTitle, unemployed: userUnemployed}
    const people = []
  
    const userHasScholarship =
      (userAdult === "Sí" && userTitle === "Sí") || userUnemployed === "Sí";
  
    document.getElementById("result").innerHTML = userHasScholarship
      ? "Felicitats, compleixes els requisits per a l'obtenció d'una beca."
      : "Ho sentim, no compleixes els requisits per a l'obtenció d'una beca.";
  }