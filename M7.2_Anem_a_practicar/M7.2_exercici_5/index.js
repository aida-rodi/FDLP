function printResult() {
    const userNumber = Number(document.getElementById("userNumber").value);
    const isPrime = isPrime(userNumber) ? "es primo" : "no es primo";

    document.getElementById("result").innerHTML = `El número ${userNumber} ${isPrime}.`;
    console.log("hola")
}

function isPrime(num) {
    console.log("mundo")
    if (userNumber === 0 || userNumber === 1) return false;

    for (let i = 2; i < userNumber; i++) {
        if (userNumber % i === 0) return false;
    }

    return true;
}
