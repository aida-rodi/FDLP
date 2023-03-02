export function loopFor() {
    const array1 = []
    const array2 = []

    for (let index = 200; index >= 0; index = index - 20) {
        array1.push(index)

        if (index % 3 === 0 && index !== 0) {
            array2.push(index)
        }
    }

    document.getElementById("array1").innerHTML = array1.join(', ')
    document.getElementById("array2").innerHTML = array2.reverse().join(', ')
}