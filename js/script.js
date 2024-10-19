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
        bookCard.classList.add("bookcard", "index")

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

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".show-dialog");
const closeButton = document.querySelector("dialog button");
const submitButton = document.querySelector("#bsubmit");
document.querySelectorAll

submitButton.addEventListener("click", (event) => {
    addBook();
    dialog.close();
    event.preventDefault();
})

showButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click',() => {
    dialog.close();
})

function addBook(){
    var inputTitle =Array.from(document.querySelectorAll("input"))[0].value;
    Array.from(document.querySelectorAll("input"))[0].value = '';
    var inputAuthor =Array.from(document.querySelectorAll("input"))[1].value;
    Array.from(document.querySelectorAll("input"))[1].value='';
    var inputPages =Array.from(document.querySelectorAll("input"))[2].value;
    Array.from(document.querySelectorAll("input"))[2].value='';
    var inputRead =Array.from(document.querySelectorAll("input"))[3].checked;
    Array.from(document.querySelectorAll("input"))[3].checked=false;


    book = new Book(inputTitle,inputAuthor,inputPages,inputRead);
    book.addBookToLibrary(myLibrary);
}


