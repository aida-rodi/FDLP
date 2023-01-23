function calculate() {
    const PAINT_COVERAGE = 12

    const wallWidth = Number(document.getElementById("wallWidth").value)
    const wallHeight = Number(document.getElementById("wallHeight").value)
    const paintLayers = Number(document.getElementById("paintLayers").value)

    const totalLiters = (wallWidth * wallHeight * paintLayers) / PAINT_COVERAGE

    document.getElementById("result").innerHTML = "Seran necessaris " + totalLiters + " litre(s) de pintura."
}