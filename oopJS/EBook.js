import Book from "./Book.js";

class EBook extends Book{
    constructor (bookName, author,yearPublication, fileFormat) {
        super (bookName, author,yearPublication);
        this.fileFormat = fileFormat;

    }
     printInfo () {
         console.log(`Book title - "${this.bookName}" , Author -  ${this.author} ,Year of publication -  ${this.yearPublication} , File format - ${this.fileFormat}`);
    }

    get fileFormat() {
        return this._fileFormat
    }

    set fileFormat (value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Unsupported file format");
        } 

        this._fileFormat = value;
    }

    static createFromBook(book, fileFormat) {
        return new EBook(
            book.bookName,
            book.author,
            book.yearPublication,
            fileFormat
        );
    }
}



export default EBook;