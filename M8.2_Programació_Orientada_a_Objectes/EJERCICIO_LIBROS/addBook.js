import {Book} from "./Book.js"



export function addBook(bookList){

    const title = prompt('which title?')

    const pages = Number(prompt('how many pages?'))

    const author = prompt('which author?')

    const editorial = prompt('which editorial?')

    const rating = Number(prompt ( 'which rating?'))

    const copies = Number( prompt('how many copies?'))

    const book = new Book(title, pages, author, editorial, rating, copies) 

    bookList.push(book)
    console.log(bookList)

}