const myLibrary = [];
var booksDisplayed = false;

function Book(bookTitle, bookAuthor, bookPages, bookRead) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.pages = bookPages;
    this.read = bookRead;
}

myLibrary.displayBooks = function displayBooks() {
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
        divRead.textContent = 'READ';
        bookCard.appendChild(divRead);

        const divRemove = document.createElement("button");
        divRemove.classList.add('remove-book');
        divRemove.textContent = 'X';
        bookCard.appendChild(divRemove);

        bookContainer.appendChild(bookCard);


    }
)

const removeButtons = document.querySelectorAll(".remove-book");
removeButtons.forEach((removeButton) => {
removeButton.addEventListener('click', () => {
    console.log("joe")
})})


const readButtons = document.querySelectorAll(".bookread");
readButtons.forEach((readButton) => {
readButton.addEventListener('click', () => {
    console.log('read');
})})
    booksDisplayed = true;
}



Book.prototype.removeBookFromLibrary = function removeBookFromLibrary(myLibrary) {
    var bookIndex = myLibrary.findIndex((book) => book.title == this.title, this)
    myLibrary.splice(bookIndex, 1)
}






const displayButton = document.querySelector(".display-book");
displayButton.addEventListener('click', () => {
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

closeButton.addEventListener('click', () => {
    dialog.close();
})

function addBook() {
    var inputTitle = Array.from(document.querySelectorAll("input"))[0].value;
    Array.from(document.querySelectorAll("input"))[0].value = '';
    var inputAuthor = Array.from(document.querySelectorAll("input"))[1].value;
    Array.from(document.querySelectorAll("input"))[1].value = '';
    var inputPages = Array.from(document.querySelectorAll("input"))[2].value;
    Array.from(document.querySelectorAll("input"))[2].value = '';
    var inputRead = Array.from(document.querySelectorAll("input"))[3].checked;
    Array.from(document.querySelectorAll("input"))[3].checked = false;

    console.log("addbook")
    console.log(myLibrary)
    book = new Book(inputTitle, inputAuthor, inputPages, inputRead);
    book.addBookToLibrary(myLibrary);
}


Book.prototype.addBookToLibrary = function addBookToLibrary(myLibrary) {
    var inLibrary = false;
    console.log(inLibrary)
    console.log(this)
    console.log(myLibrary)

    myLibrary.forEach((book) => {
        console.log(book);
        console.log((book.title == this.title) && (book.author == this.author))

        if ((book.title === this.title) && (book.author === this.author)) {
            inLibrary = true;
        }
    })
    console.log(inLibrary)
    if (!(inLibrary)) {
        myLibrary.push(this)
    } else {
    }
}

