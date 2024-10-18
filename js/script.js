const myLibrary = [];


function Book(bookTitle,bookAuthor,bookPages,bookRead){
    this.title = bookTitle;
    this.author = bookAuthor;
    this.pages = bookPages;
    this.read = bookRead;
}

function displayBooks(myLi){
    myLibrary
}

Book.prototype.addBookToLibrary = function addBookToLibrary(myLibrary){
    myLibrary.push(this)
}

book1 = new Book('TITLE','1925','234',true);
console.log(book1)
book1.addBookToLibrary(myLibrary);
myLibrary.displayBooks();
book2 = new Book('TITLE2','1985','24',false);
book2.addBookToLibrary(myLibrary);
console.log(book2)
myLibrary.displayBooks();
