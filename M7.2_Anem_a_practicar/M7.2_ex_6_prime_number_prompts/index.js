function calculate(){
    let userNumber = Number(prompt("Escribe un número, por favor"));

    for (let index = 2; index < userNumber; index++) {
        debugger
        if (userNumber%index === 0 ) {
            let isPrime = false  
            console.log (isPrime)
         // userNumber = prompt("¡Sigue intentando, por favor!")
            return 
        }
        else {isPrime = true}
    }
    console.log (isPrime)
    document.getElementById("result").innerHTML= `El numero ${userNumber} es primo`
}
