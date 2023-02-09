# Calcula el cost d'una fideuà

Un grup d’amics ha quedat per fer una fideuà.

Els ingredients principals seran: fideus, gambes, i calamars.

Saben que per cada quatre persones han d’utilitzar mig quilo (500gr) de fideus, 400 grams de calamars i 200 grams de gambes.

S’ha de fer un programa que demani per pantalla el preu per quilo de cada ingredient i el nombre d’amics que seran per dinar. El programa ha de calcular les quantitats necessàries de cada ingredient, el preu per persona i el preu final de la fideuà.

------------------------

Cosas que hay que pedir *por input*:
- Número de personas ✔
- Precio de cada ingrediente (por 1Kg) ✔
    - input precio 1Kg fideos
    - input precio 1Kg calamares
    - input precio 1Kg gambas

Cosas que hay que calcular:
- Cantidades de cada ingrediente según el número de personas ✔
    - Cantidades para 1 persona: //Cantidades del enunciado divididas entre 4 ✔
        - 125gr fideos
        - 100gr calamares
        - 50gr gambas
    - Multiplicar cantidades para 1 persona por el número de personas ✔

- Precio total de la fideuá
    - Coger inputs de precio por kilo y multiplicar por cantidad de cada ingrediente según el número de personas ✔
        - precio 1Kg fideos * kilos de fideos necesarios ✔
        - precio 1Kg calamares * kilos de calamares necesarios ✔
        - precio 1Kg de gambas * kilos de gambas necesarios ✔
    - sumar el precio de todos los ingredientes ✔
        
- Precio por persona de la fideuá ✔
    - dividir el precio total de la fideuá entre el número de personas