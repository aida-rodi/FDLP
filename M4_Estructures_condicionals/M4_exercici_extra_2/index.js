const numberDictionary = {
  0:"zero", 1:"u", 2:"dos", 3:"tres", 4:"quatre", 5:"cinc", 6:"sis", 7:"set", 8:"vuit", 9:"nou",
  10:"deu", 11:"onze", 12:"dotze", 13:"tretze", 14:"catorze", 15:"quinze", 16:"setze", 17:"disset", 18:"divuit", 19:"dinou",
  20:"vint", 30:"trenta", 40:"quaranta", 50:"cinquanta", 60:"seixanta", 70:"setanta", 80:"vuitanta", 90:"noranta"
}

function translateNumber() {
  const userNumber = (document.getElementById("userNumber").value)

  let numberInNumberDictionary = numberDictionary[userNumber]

  if (!numberInNumberDictionary && userNumber[0] !== "2") {
    const userNumberTen = userNumber[0] + "0"
    const userNumberUnit = userNumber[1]
    numberInNumberDictionary = `${numberDictionary[userNumberTen]}-${numberDictionary[userNumberUnit]}`
  }

  if (!numberInNumberDictionary && userNumber[0] === "2") {
    const userNumberTen = userNumber[0] + "0"
    const userNumberUnit = userNumber[1]
    numberInNumberDictionary = `${numberDictionary[userNumberTen]}-i-${numberDictionary[userNumberUnit]}`
  }

  document.getElementById("translation").innerHTML = numberInNumberDictionary
}