###ENUNCIAT 7.3 ex 1###
>Realitzar un programa amb el següent menú a HTML:

<image src="menu.jpg"></image>

Segons l’opció escollida haurà d’introduir unes dades o altres perquè el programa mostri per pantalla
l’àrea (el valor) del polígon escollit.

##HTML##
- En la web se mostrará un input, OPCIÓ, y habrán 4 inputs más ocultos, COSTAT, BASE, ALTURA,y RADIO. Según la opción seleccionada, se activarán unos u otros para que el usuario introduzca los valores apropiados. 


##JAVASCRIPT##
- Tras introducir los valores apropiados en los inputs, el botón CALCULAR llamará a la función calculate(), que asignará un valor entre 1 y 4 a la variable OPTIONseleccionará el tipo de operación a llevar a cabo.
- La opción seleccionada por el usuario llamará a una de estas cuatro funciones:
  - calculateSquare()
    - Mostrará el input COSTAT y asignará su valor al cuadrado a la variable SQUARE
  - calculateTriangle()
    - Mostrará los inputs BASE y ALTURA y asignará sus valores multiplicados y divididos por 2 a la variable TRIANGLE
  - calculateRectangle()
    - Mostrará los inputs BASE y ALTURA y asignará sus valores multiplicados a la variable RECTANGLE
  - calculateCercle()
    - Mostrará el input RADIO, lo multiplicará por la constante MATH.PI, y tras elevar el resultado al cuadrado asignará su valor a la variable CERCLE


##CSS##
    Aún con problemas para centrar y distribuir los items, luego le doy un repaso.
