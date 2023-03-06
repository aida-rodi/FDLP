function showNumbers() {
    const array = []

    for (let index = 100; index >=0; index = index - 2) {
        array.push(index);
    }

    document.getElementById("result").innerHTML = array.join(", ")
}