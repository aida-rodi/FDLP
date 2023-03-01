//import {Book} from "./Book.js"
import { addBook } from "./addBook.js"
import { removeBook } from "./removeBook.js"
import { showBook} from "./showBook.js"
import { updateBook} from "./updateBook.js"



const bookList = []

document.getElementById("addBook").addEventListener("click",  () => addBook(bookList))
document.getElementById("removeBook").addEventListener("click",() =>removeBook(bookList))
document.getElementById("showBook").addEventListener("click",() => showBook(bookList))
document.getElementById("updateBook").addEventListener("click",() => updateBook(bookList))


