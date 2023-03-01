
export function showBook(bookList){

    const titleToShow = prompt('which title you want to see?')

    const foundBook= bookList.find((book)=> book.checkIsBook(titleToShow))

    if(foundBook=== undefined){

        alert('book was not found')

        return
    }
    alert(foundBook.toString())




}