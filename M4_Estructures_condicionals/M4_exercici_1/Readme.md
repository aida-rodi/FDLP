# Mostra si ets major o menor d'edat

HTML

1. Crear un *h1* con el título ✔

2. Crear un *p* vacío con *id="showData" para imprimir la respuesta ✔


JAVASCRIPT

1. Crear 3 prompts para pedir al usuario nombre, apellido y edad ✔

2. Crear una variable *const isUserAdult = age >= 18* que compruebe si el usuario es adulto ✔

3. Crear una variable *const userIsAdult = `${name} ${surname}, ets MAJOR d'edat.`* para cuando el usuario SÍ sea adulto ✔

4. Crear una variable *const userIsMinor = `${name} ${surname}, ets MENOR d'edat.`;* para cuando el usuario NO sea adulto ✔

5. Crear un condicional ternario: ✔
isUserAdult
  ? (document.getElementById("showData").innerHTML = userIsAdult)
  : (document.getElementById("showData").innerHTML = userIsMinor)