# Litres de pintura necessaris

HTML

1. Crear un *h1* para el título y un *p* para pedir al usuario que introduzca las medidas de la pared ✔

2. Crear 2 *input="text"* para que el usuario introduzca las medidas ✔

3. Assignar un nombre a cada *input="text"* usando *id="wallWidth"* y *id="wallHeight"* ✔

4. Crear un *p* para pedir al usuario que introduzca el número de capas de pintura que desea realizar ✔

5. Crear un *input="text"* para que el usuario introduzca el número de capas y asignarle un *id="paintLayers"* ✔

6. Crear un *button* con la función *onclick=calculate()* ✔

7. Crear un *p* vacío con *id="result"* ✔


JAVASCRIPT

1. Crear una variable *const paintCoverage = 12* ✔

2. Crear una variable *const wallWidth = Number(document.getElementById("wallWidth").value)* para tranformar el primer *input="text"* a *Number* y almacenarlo ✔

3. Crear una variable *const wallHeight = Number(document.getElementById("wallHeight").value)* para tranformar el segundo *input="text"* a *Number* y almacenarlo ✔

4. Crear una variable *const paintLayers = Number(document.getElementById("paintLayers").value)* para tranformar el tercer *input="text"* a *Number* y almacenarlo ✔

5. Crear una variable *const totalLiters = (wallWidth * wallHeight * paintLayers) / paintCoverage* ✔

6. Crear una función *calculate()* que imprima mediante *document.getElementById("result").innerHTML = "Litres de pintura necessaris: " + totalLiters* ✔