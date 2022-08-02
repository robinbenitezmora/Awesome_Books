class Library {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class InterfaceUser {
  static displayBooks() {
    const books = [
      {
        title: 'Nuremberg Process',
        author: 'Joe J. Heidecker',
      },
      {
        title: 'The Science Fiction Hall of Fame',
        author: 'Isaac Asimov',
      },
      {
        title: 'The Martian',
        author: 'Andy Weir',
      },
    ];
    books.forEach((book) => { InterfaceUser.addBookToLibrary(book); });
  }

  static addBookToLibrary(book) {
    const library = document.getElementById('book_list');
    const row = document.createElement('section');

    row.innerHTML = `
      <div class='book'>
        <div class="title">'${book.title}' ${'by'} ${book.author}</div>
        <div><button href="#" class='delete'>Remove</button></div><hr>
      </div>
    `;

    library.appendChild(row);
  }

  static deleteBook(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}

document.addEventListener('DOMContentLoaded', InterfaceUser.displayBooks);

document.getElementById('books__add').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  if (title === '' || author === '') {
    alert('Please fill in all fields');
  } else {
    const book = new Library(title, author);
    InterfaceUser.addBookToLibrary(book);
    InterfaceUser.clearFields();
  }
});

document.getElementById('book_list').addEventListener('click', (e) => {
  InterfaceUser.deleteBook(e.target);
});