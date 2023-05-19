let myLibrary = [
    {title: "The Hobbit", author: "J.R.R. Tolkien", pages: 295, read: "Incomplete"},
    {title: "Nineteen Eighty-Four", author: "George Orwell", pages: 328, read: "Complete"},
    {title: "On War", author: "Carl von Clausewitz", pages: 373, read: "Complete"}
];

const addBookBtn = document.querySelector('.new-book')
const addBookCard = document.querySelector('.add-book-card')
const pageMask = document.querySelector('.page-mask')
const table = document.querySelector('.book-table')

addBookBtn.addEventListener('click', function() {
    addBookCard.removeAttribute('id', 'hidden')
    pageMask.removeAttribute('id', 'hidden')
})

pageMask.addEventListener('click', function() {
    pageMask.setAttribute('id', 'hidden')
    addBookCard.setAttribute('id', 'hidden')
})

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(b) { // traverse the DOM for user inputs, create new book object and push to library
    const loc = b.parentElement.children   
    const statusLoc = loc.checkbox.children.status.checked
    let readStatus = ""
    
    statusLoc == true ? readStatus = "Complete" : readStatus = "Incomplete"
    
    let book = new Book(loc.title.value, loc.author.value, loc.pages.value, readStatus)
    myLibrary.push(book)


    console.log(myLibrary[myLibrary.length-1])

    createTableRow(myLibrary[myLibrary.length-1])
}

function createTableRow(book) {
    const newRow = document.createElement("tr");
    
    const createCell = (content) => {
      const cell = document.createElement("td");
      cell.textContent = content;
      return cell;
    };
  
    newRow.appendChild(createCell(book.title));
    newRow.appendChild(createCell(book.author));
    newRow.appendChild(createCell(book.pages));
  
    const bookReadTd = document.createElement("td");
    const bookReadBtn = document.createElement("button");
    bookReadBtn.setAttribute("id", book.read);
    bookReadBtn.setAttribute("onclick", "toggleStatus(this)")
    bookReadBtn.textContent = book.read;
    bookReadTd.appendChild(bookReadBtn);
  
    const deleteBtnTd = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtnTd.appendChild(deleteBtn);
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("id", "delete-button");
    deleteBtn.setAttribute("onclick", "deleteRow(this)")
  
    newRow.appendChild(bookReadTd);
    newRow.appendChild(deleteBtnTd);
  
    table.appendChild(newRow);
}

function deleteRow(button) {
    let index = button.parentElement.parentElement.rowIndex
    
    myLibrary.splice(index-1, 1)
    table.deleteRow(index)
}

function toggleStatus(b) {
    if (b.textContent == "Complete") {
        b.textContent = "Incomplete"
        b.setAttribute("id", "Incomplete")
    }
    else {
        b.textContent == "Incomplete"
        b.textContent = "Complete"
        b.setAttribute("id", "Complete")
    }
}

for (book of myLibrary) {
    createTableRow(book)
  }