'use strict';

let myLibrary = [];

class Book {
    constructor(title, author, description, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.read = read;
    }

}


function addBookToLibrary(book) {
    myLibrary.unshift(book);
    
    console.dir(book);
}

function deleteBookFromLibrary(index) {
    alert('The book at index : ' + index + ' has been deleted.');
    myLibrary.splice(index, 1);
}

const addBook = document.getElementById('addBook');


addBook.addEventListener('click', (e) => {

    e.preventDefault();
    let bookTitle = document.getElementById('titleField').value;
    let bookAuthor = document.getElementById('authorField').value;
    let bookPages = document.getElementById('numPagesField').value;
    let bookDescription = document.getElementById('descriptionField').value;
    let bookRead = document.getElementById('readCheck').value;
    addBookToLibrary(
        new Book(
            bookTitle,
            bookAuthor,
            bookDescription,
            bookPages,
            bookRead
        )
    );

    createBookCard(myLibrary);
    const bookForm = document.getElementById('bookForm');
    bookForm.reset();
});

//addBookToLibrary(new Book('Lord of the Rings: Fellowship of the Ring', 'JR Tolkien', 412, 'Read'));

const bookList = document.getElementById('bookList');
bookList.addEventListener('load', createBookCard(myLibrary));

function createBookCard(myLibrary) {
    for (var i = 0; i < myLibrary.length; i++ )
    /* myLibrary.forEach(book =>  */{
        let book = myLibrary[i];
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');

        const h5 = document.createElement('h5');
        h5.setAttribute('class', 'card-title');
        h5.setAttribute('id', 'bookTitle');
        h5.innerHTML = book.title;

        const info = document.createElement('p');
        info.setAttribute('class', 'card-text justify-content-center');
        info.innerHTML = 'Author: ' + book.author + '<br>' + 'Description:' + book.description + '<br>' +' Pages: ' + book.pages;

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('type', 'button');
        deleteButton.setAttribute('class', 'btn btn-outline-danger btn-sm');
        deleteButton.setAttribute('id', 'deleteBook');
        deleteButton.innerHTML = 'Delete Book';

        let readButton = document.createElement('button');
        readButton.setAttribute('type', 'button');
        readButton.setAttribute('class', 'btn btn-outline-primary btn-sm');
        readButton.setAttribute('id', 'readBook');
        readButton.innerHTML = book.read;

        bookList.appendChild(card);
        card.appendChild(cardBody);
        cardBody.appendChild(h5);
        cardBody.appendChild(info);
        cardBody.appendChild(deleteButton);
        cardBody.appendChild(readButton);
    }

}


// event listener for the bookList
// method finds the corresponding book title and saves and index from it to then use that for finding the 
// correct element of the myLibrary array
bookList.addEventListener('click', function (e) {
    // finds the book by title
    let titleToFind = document.querySelector('#bookTitle').innerHTML;
    const index = myLibrary.indexOf(myLibrary.find(book => book.title === titleToFind));
    if (e.target.id === 'deleteBook') {
        console.dir(index);
        deleteBookFromLibrary(index);
        e.target.parentNode.remove();
    }

    if (e.target.id === 'readBook') {
        if (e.target.innerHTML == 'Read') {
            
            e.target.innerHTML = 'Not Read';
        } else {
            e.target.innerHTML = 'Read';
        }
    }

});