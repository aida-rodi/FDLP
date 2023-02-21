
let OPTION = undefined

function enterDimensions() {
    document.getElementById("result").innerHTML = ''
    OPTION = Number(document.getElementById('opcio').value);
    document.getElementById("calculate").style.visibility = 'visible';

    switch (OPTION) {
        case 1: {
            document.getElementById("getSide").style.visibility = 'visible';
            break;
        }
        case 2: {
            document.getElementById("getBase").style.visibility = 'visible';
            document.getElementById("getHeight").style.visibility = 'visible';
            break;
        }
        case 3: {
            document.getElementById("getBase").style.visibility = 'visible';
            document.getElementById("getHeight").style.visibility = 'visible';
            break;
        }
        case 4: {
            document.getElementById("getRadius").style.visibility = 'visible';
            break;
        }
    }
}

function calculate() {
    document.getElementById("calculate").style.visibility = 'hidden';
    document.getElementById("option").value = '';
    
    switch (OPTION) {
        case 1: {

            document.getElementById("getSide").style.visibility = 'hidden';
            
            const square = Number(document.getElementById("getSide").value) ** 2;
            document.getElementById("result").innerHTML = `Àrea del quadrat: ${square}`;
            document.getElementById("getSide").value = '';

            break;
        }
        case 2: {

            const height = Number(document.getElementById("getHeight").value);//LOS OTROS 3 CASOS TIENEN QUE IR IGUAL. ARREGLAR
            const base = Number(document.getElementById("getBase").value);

            document.getElementById("getBase").style.visibility = 'hidden';
            document.getElementById("getHeight").style.visibility = 'hidden';
            document.getElementById("getBase").value = '';
            document.getElementById("getHeight").value = '';


            const triangle = (base * height) / 2
            document.getElementById("result").innerHTML = `Àrea del triangle: ${triangle}`;
            break;
        }
        case 3: {

            const height = Number(document.getElementById("getBase").value);
            const base = Number(document.getElementById("getHeight").value);
            document.getElementById("getBase").style.visibility = 'hidden';
            document.getElementById("getHeight").style.visibility = 'hidden';
            document.getElementById("getBase").value = '';
            document.getElementById("getHeight").value = '';

            const rectangle = base * height
            document.getElementById("result").innerHTML = `Àrea del rectangle: ${rectangle}`;
            break;
        }
        case 4: {

            document.getElementById("getRadius").style.visibility = 'hidden';
            const radius = Number(document.getElementById("getRadius").value);
            document.getElementById("getRadius").style.value = '';
            
            const circle = ((Math.PI * radius) ** 2).toFixed(2);
            document.getElementById("result").innerHTML = `Àrea del cercle: ${circle}`;
            break;
        }
    }
}

