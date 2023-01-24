function calculate() {
    const month = Number(document.getElementById("userMonth").value)

    switch (month) {
        case 1:
            document.getElementById("result").innerHTML = "El mes de gener té 31 dies."
            break;

        case 2:
            document.getElementById("result").innerHTML = "El mes de febrer té 28 dies."
            break;

        case 3:
            document.getElementById("result").innerHTML = "El mes de març té 31 dies."
            break;
        
        case 4:
            document.getElementById("result").innerHTML = "El mes d'abril té 30 dies."
            break;

        case 5:
            document.getElementById("result").innerHTML = "El mes de maig té 31 dies."
            break;

        case 6:
            document.getElementById("result").innerHTML = "El mes de juny té 30 dies."
            break;

        case 7:
            document.getElementById("result").innerHTML = "El mes de juliol té 31 dies."
            break;

        case 8:
            document.getElementById("result").innerHTML = "El mes d'agost té 31 dies."
            break;
            
        case 9:
            document.getElementById("result").innerHTML = "El mes de setembre té 30 dies."
            break;

        case 10:
            document.getElementById("result").innerHTML = "El mes d'octubre té 31 dies."
            break;

        case 11:
            document.getElementById("result").innerHTML = "El mes de novembre té 30 dies."
            break;

        case 12:
            document.getElementById("result").innerHTML = "El mes de desembre té 31 dies."
            break;
    
        default:
            document.getElementById("result").innerHTML = "Siusplau introdueixi un mes."
            break;
    }
}