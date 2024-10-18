const myLibrary = [];


function Book(bookTitle,bookAuthor,bookPages,bookRead){
    this.title = bookTitle;
    this.author = bookAuthor;
    this.pages = bookPages;
    this.read = bookRead;
}

myLibrary.displayBooks = function displayBooks(){
    this.forEach((book) => console.log(book))
}

Book.prototype.addBookToLibrary = function addBookToLibrary(myLibrary){
    myLibrary.push(this)
}

Book.prototype.removeBookFromLibrary = function removeBookFromLibrary(myLibrary){
    var bookIndex = myLibrary.findIndex((book) => book.title == this.title,this)
    myLibrary.splice(bookIndex,1)
}

myLibrary.displayBooks();
book1 = new Book('TITLE','1925','234',true);
book1.addBookToLibrary(myLibrary);
myLibrary.displayBooks();
book2 = new Book('TITLE2','1985','24',false);
book2.addBookToLibrary(myLibrary);

myLibrary.displayBooks();