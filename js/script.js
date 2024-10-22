const myLibrary = [];
var booksDisplayed = false;

function Book(bookTitle, bookAuthor, bookPages, bookRead) {
    this.title = bookTitle;
    this.author = bookAuthor;
    this.pages = bookPages;
    this.read = bookRead;
}

myLibrary.displayBooks = function displayBooks() {
    var bookContainer = document.querySelector(".book-container");
    var indexBook = "index" + (myLibrary.length - 1);
    console.log(indexBook)
    this.forEach((book) => {
        console.log(book)
        console.log(containsObject(book, bookContainer))
        if(!containsObject(book, bookContainer)){
  

        const bookCard = document.createElement("div");
        bookCard.classList.add("bookcard", indexBook)

        const divTitle = document.createElement("div");
        divTitle.classList.add('booktitle',indexBook);
        divTitle.textContent =  book.title;
        bookCard.appendChild(divTitle);

        const divAuthor = document.createElement("div");
        divAuthor.classList.add('bookauthor',indexBook);
        divAuthor.textContent = book.author;
        bookCard.appendChild(divAuthor);

        const divPages = document.createElement("div");
        divPages.classList.add('bookpages',indexBook)
        divPages.textContent = book.pages;
        bookCard.appendChild(divPages);

        const divRead = document.createElement("button");
        
        if(book.read){
        divRead.textContent = 'READ';
        divRead.classList.add('bookread', indexBook, 'read');
        }else{
            divRead.textContent = 'NOT READ';
            divRead.classList.add('bookread', indexBook,'notread');   
        }
        bookCard.appendChild(divRead);

        const divRemove = document.createElement("button");
        divRemove.classList.add('remove-book',indexBook);
        divRemove.textContent = 'X';
        bookCard.appendChild(divRemove);

        bookContainer.appendChild(bookCard);
        }


    }
)

const removeButtons = document.querySelectorAll(".remove-book");
removeButtons.forEach((removeButton) => {
var indexNumber=removeButton.className.split('index')[1].split(' ')[0];
removeButton.addEventListener('click', () => {
removeFromLibrary(indexNumber)

})})


const readButtons = document.querySelectorAll(".bookread");
readButtons.forEach((readButton) => {
var indexNumber=readButton.className.split('index')[1].split(' ')[0];
readButton.addEventListener('click', () => {
    changeReadStatus(indexNumber);
})})
    booksDisplayed = true;
}

function changeReadStatus(indexNumber){
    var cardString = ".bookread.index"+indexNumber;
    btnRead = document.querySelector(cardString);
    if (btnRead.textContent === 'READ'){
        btnRead.textContent = 'NOT READ'
        btnRead.classList.remove("read");
        btnRead.classList.add('notread');
    }else {
        btnRead.textContent ='READ'
        btnRead.classList.remove('notread');
        btnRead.classList.add("read");
        
    }
    
}

Book.prototype.removeBookFromLibrary = function removeBookFromLibrary(myLibrary) {
    var bookIndex = myLibrary.findIndex((book) => book.title == this.title, this)
    myLibrary.splice(bookIndex, 1)
}

function removeFromLibrary(indexBook){
    myLibrary.splice(indexBook, 1);
    var cardString = ".bookcard.index"+indexBook;
    document.querySelector('.book-container').removeChild(document.querySelector(cardString))
    
}







const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".show-dialog");
const closeButton = document.querySelector(".close");
const submitButton = document.querySelector("#bsubmit");

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
    event.preventDefault();
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

    book = new Book(inputTitle, inputAuthor, inputPages, inputRead);
    book.addBookToLibrary(myLibrary);
    myLibrary.displayBooks()
}


Book.prototype.addBookToLibrary = function addBookToLibrary(myLibrary) {
    var inLibrary = false;

    myLibrary.forEach((book) => {
      

        if ((book.title === this.title) && (book.author === this.author)) {
            inLibrary = true;
        }
    })

    if (!(inLibrary)) {
        myLibrary.push(this)
    } else {
    }
}



function containsObject(book, bookcontainer) {
    var alreadyIn = false;

    for (let i = 0; i < Array.from(bookcontainer.childNodes).length; i++) {
        node = bookcontainer.childNodes[i];
        titleBookContainer=node.childNodes[0].textContent;
        authorBookContainer=node.childNodes[1].textContent;

        if ((titleBookContainer === book.title) && (authorBookContainer == book.author)) {
            alreadyIn = true;
            return alreadyIn;
            break;

        }else{
            alreadyIn = false;
        }

      }
      return alreadyIn;
    }


        

      





