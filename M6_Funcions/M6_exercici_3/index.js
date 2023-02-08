const time = []

function addDate() {
    
    const currentDate = new Date()
    time.push(currentDate)
    console.log(time)

}

function findNumberPosition(number, arrayOfNumbers) {
    let result = -1
    for (let position = 0; position < arrayOfNumbers.length; position++) {
        if (arrayOfNumbers[position] === number) {
            result = position
        }
    }
    return result
    
}

function menu(id) {
    if (id === 1) {
        addDate()
    }
    if (id === 2) {
        const numberPosition = findNumberPosition(8, [9,52,1,47,85,8])
        console.log(numberPosition)
    }
}