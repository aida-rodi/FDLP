export class Book {

    #title
    #pages
    #author
    #editorial
    #rating
    #copies

    constructor(title, pages, author, editorial, rating, copies) {

        this.#title = title
        this.#pages = this.#validatePages(pages)
        this.#author = author
        this.#editorial = editorial
        this.#rating = rating
        this.#copies = copies

    }

    toDTO() {
        return {
            title: this.#title,
            pages: this.#pages,
            author: this.#author,
            editorial: this.#editorial,
            rating: this.#rating,
            copies: this.#copies,
        }
    }

    checkIsBook(title) {
        return this.#title === title
    }


    updateRating(rating) {
        if (rating < 0 || rating > 10) throw new Error('invalid rating')
        this.#rating = rating
    }
    updateCopies(copies) {
        if(copies<0 ) throw new Error('invalid copy')
        this.#copies = copies
    }

    #validatePages(value) {
        if (value % 2 !== 0) {
            throw new Error('invalid value')

        }
        return value

    }
    toString() {

        return `title: ${this.#title}\n 
        pages: ${this.#pages}\n
        author: ${this.#author}\n
        editorial: ${this.#editorial}\n
        rating: ${this.#rating}\n
        copies: ${this.#copies}`


    }

}

















