let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
}

function addBookToLibrary() {
    return
}


// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Haven't read yet")



const addBookBtn = document.querySelector('.new-book')


function openAddBookCard()

