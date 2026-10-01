class Book {
    constructor (bookName, author,yearPublication ) {
        this.bookName = bookName;
        this.author = author;
        this.yearPublication = yearPublication;

    }
   
    get bookName() {
    return this._bookName;
}
    set bookName(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Book name must be correct and no empty");
        }
        this._bookName = value;
    }

    get author() {
        return this._author;
    }

    set  author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Author name must be correct and no empty");
        }
        this._author = value;
    }

    get yearPublication() {
        return this._yearPublication;
    }

    set yearPublication(value) {
        if (!Number.isInteger(value) || value <= 0 ) {
            throw new Error ("Year must be positive number")
        }
        this._yearPublication = value;
    }


     printInfo () {
        console.log(`Book title - "${this.bookName}" , Author - ${this.author} ,Year of publication - ${this.yearPublication} `);
        
    }


    static getNewestBook(books) {
        return books.reduce((newest, book) => {
            return book.yearPublication > newest.yearPublication? book: newest;
        });
    }
}


export default Book;  
