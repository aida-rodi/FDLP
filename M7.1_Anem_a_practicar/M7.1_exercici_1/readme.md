# Mitjana de 3 notes

HTML

1. Crear un *h1* para el título y un *p* para pedir al usuario que introduzca 3 números 

2. Crear 3 *input="text"* para que el usuario introduzca los 3 números 

3. Assignar un nombre a cada *input="text"* usando *id="firstNum"*, *id="secondNum"* y *id="thirdNum"* 

4. Crear un *button* con la función *onclick=calculate()* 

5. Crear un *p* vacío con *id="result"* 


JAVASCRIPT

1. Crear una función *calculate()*

2. Crear una variable *const firstUserNum = Number(document.getElementById("firstNum").value)* para tranformar el primer *input="text"* a *Number* y almacenarlo 

3. Crear una variable *const secondUserNum = Number(document.getElementById("secondNum").value)* para tranformar el segundo *input="text"* a *Number* y almacenarlo 

4. Crear una variable *const thirdUserNum = Number(document.getElementById("thirdNum").value)* para tranformar el tercer *input="text"* a *Number* y almacenarlo 

5. Crear una variable *const average = (firstUserNum + secondUserNum + thirdUserNum) / 3* 

6. Mediante *if* hacer que el programa imprima un mensaje diferente para cada rando de notas.

7. Si la media es inferior a 5 mostrar el siguiente mensaje: “No has superat el curs. Has de recuperar”.

8. Si la media está entre 5 i 7 mostrar: “Enhorabona! Has aprovat, però hauries de continuar practicant”.

9. Si la media es superior a 7 mostrar: "Enhorabona! Has superat el curs! Passa ja al següent nivell!"