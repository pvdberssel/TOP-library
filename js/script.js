const myLibrary = [];


function Book(bookTitle,bookAuthor,bookPages,bookRead){
    this.title = bookTitle;
    this.author = bookAuthor;
    this.pages = bookPages;
    this.read = bookRead;
}

myLibrary.displayBooks = function displayBooks(){
    const bookContainer = document.querySelector(".book-container");
    this.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookcard")

        const divTitle = document.createElement("div");
        divTitle.classList.add('booktitle');
        divTitle.textContent = book.title;
        bookCard.appendChild(divTitle);

        const divAuthor = document.createElement("div");
        divAuthor.classList.add('bookauthor');
        divAuthor.textContent = book.author;
        bookCard.appendChild(divAuthor);

        const divPages = document.createElement("div");
        divPages.classList.add('bookpages');
        divPages.textContent = book.pages;
        bookCard.appendChild(divPages);

        const divRead = document.createElement("button");
        divRead.classList.add('bookread');
        divRead.textContent = book.pages;
        bookCard.appendChild(divRead);

        bookContainer.appendChild(bookCard)
        })
    
    
}

Book.prototype.addBookToLibrary = function addBookToLibrary(myLibrary){
    myLibrary.push(this)
}

Book.prototype.removeBookFromLibrary = function removeBookFromLibrary(myLibrary){
    var bookIndex = myLibrary.findIndex((book) => book.title == this.title,this)
    myLibrary.splice(bookIndex,1)
}




const displayButton = document.querySelector(".display-book");
displayButton.addEventListener('click',() => {
    console.log('click')
    myLibrary.displayBooks()
})



book1 = new Book('TITLE','1925','234',true);
book1.addBookToLibrary(myLibrary);

book2 = new Book('TITLE2','1985','24',false);
book2.addBookToLibrary(myLibrary);

