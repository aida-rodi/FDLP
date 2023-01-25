# Escull l'operació que vols calcular

HTML

1. Crear un *h1* para el título y un *p* para pedir al usuario una operación matemática ✔

2. Crear un *input="text"* para que el usuario introduzca el primer número *id="firstUserNumber"* ✔

3. Crear un *input="text"* para que el usuario introduzca el operador *id="userOperator"* ✔

4. Crear un *input="text"* para que el usuario introduzca el segundo número *id="secondUserNumber"* ✔

5. Añadir un botón con *onclick=calculate()* que ponga *Calcular* ✔

6. Crear un *p* vacío con *id="result"* para imprimir el resultado ✔


JAVASCRIPT

1. Crear una función *calculate()* ✔

2. Crear una variable *const firstNumber = Number(document.getElementById("firstUserNumber").value)* para guardar el primer número introducido por el usuario ✔

3. Crear una variable *const operator = String(document.getElementById("userOperator").value)* para guardar el operador introducido por el usuario ✔

4. Crear una variable *const secondNumber = Number(document.getElementById("secondUserNumber").value)* para guardar el segundo número introducido por el usuario ✔

5. Crear 4 variables para almacenar cada una de las posibles operaciones: ✔
  *const addition = firstNumber + secondNumber*
  *const subtraction = firstNumber - secondNumber*
  *const multiplication = firstNumber * secondNumber*
  *const division = firstNumber / secondNumber*

6. Crear un *switch (operator)* con un case para cada operador y un default ✔