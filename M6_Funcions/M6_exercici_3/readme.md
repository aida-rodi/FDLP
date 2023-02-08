# Practica l'ús de funcions

Realitza un programa amb 5 funcions i un array buit (Global) anomenat temps.

L'HTML ha de tenir quatre botons que cridin a una única funció menu que enviï per paràmetre la funció que es vol executar.

Exemple:

<button onclick='menu(1)'>Registrar fecha y hora</button>
La funció menu s'encarregarà de passar els paràmetres necessaris a la resta de funcions.

1. Crea una funció que afegeixi a *l'array temps*, la data i hora actuals.

2. Crea una funció que rebi un *valor i un array de números com a paràmetre*.
Aquesta funció retornarà l’índex de l’array on es troba el valor.
Si el valor no es troba, es retornarà -1.

3. Crea una funció que rebi una frase com a paràmetre i la torni en minúscules sense espais en blanc, sense accents i sense signes de puntuació.
Exemple, si la frase és:
- A Cornellà, Tània i Aina tallen roca.
La funció haurà de tornar:
acornellataniaiainatallenroca

4. Crea una funció que rebi un array i un string com a paràmetre
i torni un altre array amb aquells elements de l'array rebut que continguin el text enviat.
Exemple: Es rep el següent array:

assignatures = [
'Història universal',
'Història d'Espanya',
'Geografia',
'Història de la llengua catalana',
'Antropologia',
'Anglès']

i la paraula 'Història'

La funció haurà de tornar el següent array:
[
'Història universal',
'Història d'Espanya',
'Història de la llengua catalana', ]