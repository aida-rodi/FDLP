# Programa per crear hotels

Ens demanen crear una aplicació per donar d’alta, modificar, veure i eliminar hotels.

La classe **hotel** haurà de tenir els següents **atributs: nom, nombre d’habitacions, nombre de plantes i superfície total de l’hotel**. Com a **mètodes** només haurà de tenir els **getters** i **setters** propis de la classe i un mètode anomenat **calcularManteniment()**. Aquest mètode ha de tenir en compte que cada persona del servei pot atendre 20 habitacions i haurà de mostrar quantes persones són necessàries per atendre el servei d’habitacions de l’hotel i quin és el cost total destinat al servei sabent que aquestes persones cobren 1.500 € al mes. 

La **funció crearHotel()** haurà de demanar a l’usuari/a que introdueixi per pantalla les **dades de nom, nombre d’habitacions, nombre de plantes i superfície total de l’hotel** (o haurà de rebre aquestes dades per paràmetre). Un cop hagi demanat totes aquestes dades, s’ha d’instanciar l’objecte de la classe i afegir-lo a un array d’hotels.

La **funció donarDeBaixaHotel()** haurà de rebre el nom de l'hotel que es vol donar de baixa. L’usuari/ària introduirà el nom de l’hotel i si l’hotel està dintre de l’array, l’eliminarem i mostrarem un missatge per pantalla informant l’usuari/ària que hem eliminat l’hotel. Si no hem trobat l’hotel dintre de l’array, avisarem l’usuari/ària dient que l’hotel no estava dintre de la nostra aplicació.

La **funció veureHotel()** haurà de rebre el nom de l'hotel que vol que mostrem per pantalla, si l’hotel està a la nostra aplicació, li mostrarem l’hotel, si no hi és, informarem l’usuari/ària dient que l’hotel que ens ha demanat no està dintre de la nostra aplicació. Quan mostrem l’hotel, a més, de mostrar el nombre d’habitacions, nombre de plantes i superfície total de l’hotel també es cridarà al **mètode calcularManteniment()**.

La **funció modificarHotel()** haurà de rebre el nom de l'hotel que volem modificar. L’usuari/ària introduirà el nom de l’hotel. Si el tenim a l’aplicació, li demanarem si vol modificar el nombre d’habitacions, el nombre de plantes o la superfície total de l’hotel. Farem la modificació pertinent i avisarem a l’usuari/ària que la modificació s’ha realitzat.


## JAVASCRIPT

### hotel.js

1. Crear classe **hotel** amb els atributs:
    - nom
    - número d'habitacions
    - número de plantes
    - superfície total de l'hotel

2. Afegir a la classe **hotel** els mètodes:
    - get (un per cada atribut)
    - set (un per cada atribut)
    - calcularManteniment()

### main.js

1. Crear la funció **crearHotel()**, que demana per pantalla a l'usuari les dades:
    - nom
    - número d'habitacions
    - número de plantes
    - superfície total de l'hotel

2. Crear la funció **veureHotel()**, que demana per pantalla a l'usuari el nom de l'hotel a mostrar.
    - Si no es troba l'hotel informarem a l’usuari dient que l’hotel que ens ha demanat no està a la nostra aplicació
    - Si l'hotel es troba a la base de dades aquest es mostrarà per pantalla amb les següents dades:
        - nom
        - número d'habitacions
        - número de plantes
        - superfície total de l'hotel
        - I també es cridarà al mètode **calcularManteniment()**

3. Crear la funció **modificarHotel()**, que demana per pantalla a l'usuari el nom de l'hotel a mostrar.
    - Si no es troba l'hotel informarem a l’usuari dient que l’hotel que ens ha demanat no està a la nostra aplicació
    - Si l'hotel es troba a la base de dades demanarem a l'usuari si vol modificar:
        - el nombre d’habitacions
        - el nombre de plantes
        - la superfície total de l’hotel
    - Farem la modificació pertinent i avisarem a l’usuari de que la modificació s’ha realitzat. Mostrarem també l'hotel amb les noves dades per pantalla.

## HTML

1. Crear botons:
    - Afegir nou hotel
    - Veure hotel
    - Modificar hotel
