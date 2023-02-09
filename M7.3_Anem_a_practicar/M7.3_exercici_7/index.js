function calculatePrice() {
    const numberOfPeople = Number(document.getElementById("numberOfPeople").value)

    const kgOfNoodlesPerPerson = 0.125
    const kgOfSquidPerPerson = 0.1
    const kgOfShrimpPerPerson = 0.05

    const kgOfNoodlesNeeded = kgOfNoodlesPerPerson * numberOfPeople
    const kgOfSquidNeeded = kgOfSquidPerPerson * numberOfPeople
    const kgOfShrimpNeeded = kgOfShrimpPerPerson * numberOfPeople

    const priceOfNoodlesPerKg = Number(document.getElementById("priceOfNoodlesPerKg").value)
    const priceOfSquidPerKg = Number(document.getElementById("priceOfSquidPerKg").value)
    const priceOfShrimpPerKg = Number(document.getElementById("priceOfShrimpPerKg").value)

    const priceOfNeededNoodles = priceOfNoodlesPerKg * kgOfNoodlesNeeded
    const priceOfNeededSquid = priceOfSquidPerKg * kgOfSquidNeeded
    const priceOfNeededShrimps = priceOfShrimpPerKg * kgOfShrimpNeeded

    const totalPrice = priceOfNeededNoodles + priceOfNeededSquid + priceOfNeededShrimps
    const portionPrice = totalPrice / numberOfPeople

    document.getElementById("totalPriceResult").innerHTML = `El precio total de la fideuá es de ${totalPrice.toFixed(2)}€.`
    document.getElementById("portionPriceResult").innerHTML = `El precio por persona es de ${portionPrice.toFixed(2)}€.`
}