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

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

const addBookBtn = document.querySelector('.new-book')
const addBookCard = document.querySelector('.add-book-card')
const pageMask = document.querySelector('.page-mask')


addBookBtn.addEventListener('click', function() {
    addBookCard.removeAttribute('id', 'hidden')
    pageMask.removeAttribute('id', 'hidden')
})

pageMask.addEventListener('click', function() {
    pageMask.setAttribute('id', 'hidden')
    addBookCard.setAttribute('id', 'hidden')
})

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "Incomplete")
addBookToLibrary("Nineteen Eighty-Four", "George Orwell", 328, "Complete")



const table = document.querySelector('.book-table')

for(book of myLibrary){    
    const newRow = document.createElement("tr");
    
    const bookTitle = document.createElement("td")
    const bookAuthor = document.createElement("td")
    const bookPages = document.createElement("td")
    
    bookTitle.textContent = book.title
    bookAuthor.textContent = book.author
    bookPages.textContent = book.pages
 
    
    const bookReadTd = document.createElement("td")
    const bookReadBtn = document.createElement("button")
    bookReadBtn.setAttribute('id', `${book.read}`)
    bookReadBtn.textContent = book.read
    bookReadTd.appendChild(bookReadBtn)

    const deleteBtnTd = document.createElement("td")
    const deleteBtn = document.createElement("button")
    deleteBtnTd.appendChild(deleteBtn)
    deleteBtn.textContent = "Delete"
    deleteBtn.setAttribute('id', 'delete-button')


    newRow.appendChild(bookTitle)
    newRow.appendChild(bookAuthor)
    newRow.appendChild(bookPages)
    newRow.appendChild(bookReadTd)
    newRow.appendChild(deleteBtnTd)

    table.appendChild(newRow)
}



