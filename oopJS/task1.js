import Book from "./Book.js";
import EBook from "./EBook.js";

console.log("Original books :");

const book1 = new Book ("Hary Potter and the Philosopher's Stone", "Djoanna Rowling", 1997);
const book2 = new Book ("It ends with us","Colleen Hoover", 2016);
const book3 = new Book ("The Midnight Library","Matt Haig", 2020 );
book1.printInfo();
book2.printInfo();
book3.printInfo();
//book3.author = 4567;


console.log ("Electronic books :");

const ebook1 = new EBook ("Hary Potter and the Philosopher's Stone", "Djoanna Rowling", 1997, "pdf");
const ebook2 = new EBook ("It ends with us","Colleen Hoover", 2016,"EPUB");
const ebook3 = new EBook ("The Midnight Library","Matt Haig", 2020, "pdf" );
ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo();


// Вибір найновішої книгу
console.log ("The newest book :");
const books = [book1, book2, book3]
const newestBook = Book.getNewestBook(books);

newestBook.printInfo();

//Створюю нову електронну книгу зі звичайної книги book2
console.log ("New electronic book from book2 :");
const ebookFromBook = EBook.createFromBook(book2, "EPUB");

ebookFromBook.printInfo();
