
export function removeBook(bookList){

    const titleToRemove = prompt('which book you want to remove')

    const index= bookList.findIndex((book)=> book.checkIsBook(titleToRemove))

    if(index=== -1){

        alert('book was not found')

        return

    }
    bookList.splice(index, 1)

    alert('book was removed')


}