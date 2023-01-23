# Mitjana de 3 notes

HTML

1. Crear un *h1* para el título y un *p* para pedir al usuario que introduzca 3 números ✔

2. Crear 3 *input="text"* para que el usuario introduzca los 3 números ✔

3. Assignar un nombre a cada *input="text"* usando *id="firstNum"*, *id="secondNum"* y *id="thirdNum"* ✔

4. Crear un *button* con la función *onclick=calculate()* ✔

5. Crear un *p* vacío con *id="result"* ✔


JAVASCRIPT

1. Crear una variable *const firstUserNum = Number(document.getElementById("firstNum").value)* para tranformar el primer *input="text"* a *Number* y almacenarlo ✔

2. Crear una variable *const secondUserNum = Number(document.getElementById("secondNum").value)* para tranformar el segundo *input="text"* a *Number* y almacenarlo ✔

3. Crear una variable *const thirdUserNum = Number(document.getElementById("thirdNum").value)* para tranformar el tercer *input="text"* a *Number* y almacenarlo ✔

4. Crear una variable *const average = (firstUserNum + secondUserNum + thirdUserNum) / 3* ✔

5. Crear una función *calculate()* que imprima mediante *document.getElementById("result").innerHTML = "La mitjana de les tres notes introduides és " + average ✔