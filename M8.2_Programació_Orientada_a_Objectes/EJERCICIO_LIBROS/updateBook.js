export function updateBook(bookList) {

    const titleToUpdate = prompt('which book you want to update?')

   const bookSelected= bookList.find((title) => title.checkIsBook(titleToUpdate))


    const updateRating = confirm('do you want to update rating?')
    if (updateRating === true) {

        const newRating = prompt('which is the new rating?')
        bookSelected.updateRating(newRating)

    }
    const updateCopies = confirm('do you want to update copies?')
    if (updateCopies === true) {

        const newCopies = prompt('what is the new number of copies ?')
        bookSelected.updateCopies(newCopies)

    }










}