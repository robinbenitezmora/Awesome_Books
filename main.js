function Library(title, author) {
  this.title = title;
  this.author = author;
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
    const validataLocalStorage = JSON.parse(localStorage.getItem('List'));
    const parseObjt = validataLocalStorage;
    if (parseObjt != null) {
      for (let k = 0; k < parseObjt.length; k += 1) {
        books.push(parseObjt[k]);
      }
    }
    books.forEach((book) => { InterfaceUser.addBookToLibrary(book); });
  }

  static addBookToLibrary(book) {
    const library = document.getElementById('book_list');
    const row = document.createElement('section');

    row.innerHTML = `
      <div class='book'>
        <div class="title">"${book.title}" ${'by'} ${book.author}</div>
        <div><button href="#" class='delete'>Remove</button></div><hr>
      </div>
    `;

    library.appendChild(row);
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
    const getDataLocalStorage = localStorage.getItem('List');
    if (getDataLocalStorage !== null) {
      const validationStorage = JSON.parse(localStorage.getItem('List'));
      localStorage.setItem('List', JSON.stringify(validationStorage.concat(book)));
    } else {
      const arrSetItem = [book];
      localStorage.setItem('List', JSON.stringify(arrSetItem));
    }
    InterfaceUser.addBookToLibrary(book);
    InterfaceUser.clearFields();
  }
});

document.getElementById('book_list').addEventListener('click', (e) => {
  InterfaceUser.deleteBook(e.target);
});

function loadColors() {
  const changeColor = document.getElementsByClassName('title');

  for (let l = 0; l < changeColor.length; l += 1) {
    if (l % 2 === 0) {
      changeColor[l].style.backgroundColor = 'rgba(221, 221 ,221)';
    } else {
      changeColor[l].style.backgroundColor = 'rgba(255, 255 ,255)';
    }
  }
}

function loadColor() {
  const changeColors = document.getElementsByClassName('book');

  for (let l = 0; l < changeColors.length; l += 1) {
    if (l % 2 === 0) {
      changeColors[l].style.backgroundColor = 'rgba(221, 221 ,221)';
    } else {
      changeColors[l].style.backgroundColor = 'rgba(255, 255 ,255)';
    }
  }
}

document.addEventListener('DOMContentLoaded', loadColors);
document.addEventListener('DOMContentLoaded', loadColor);

// Library with Navigation
const loadList = document.getElementById('list');
loadList.addEventListener('click', () => {
  document.getElementById('book_list').style.display = 'block';
});

const addBook = document.getElementById('add-book');
addBook.addEventListener('click', () => {
  document.querySelector('.contact').style.display = 'none';
  document.getElementById('books__add').style.display = 'block';
});

const loadContact = document.getElementById('contact');
loadContact.addEventListener('click', () => {
  document.getElementById('books__add').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';
});

