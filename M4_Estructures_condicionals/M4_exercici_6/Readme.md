# Quin és el teu signe del zodíac?

HTML

1. Crear un *h1* para el título y un *p* para pedir al usuario su fecha de nacimiento ✔

2. Crear un *input="text"* para que el usuario introduzca el día en que nació con *id="userDay"* ✔

3. Crear un *input="text"* para que el usuario introduzca el mes en que nació con *id="userMonth"* ✔

4. Añadir un botón con *onclick=calculate()* que ponga *Envia* ✔

5. Crear un *p* vacío con *id="result"* para imprimir el resultado ✔


JAVASCRIPT

1. Crear una función *calculate()* ✔

2. Crear una variable *const day = Number(document.getElementById("userDay").value)* para guardar el día introducido por el usuario ✔

3. Crear una variable *const month = String(document.getElementById("userMonth").value).toLowerCase()* para guardar el mes introducido por el usuario y transformar el String a Lowercase ✔

4. Crear un *switch (month)* con 13 cases, uno para cada mes y un default ✔

5. Usar *if else* para que salga el signo del zodíaco correcto según el día del mes introducido por el usuario ✔