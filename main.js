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
    let validataLocalStorage = JSON.parse(localStorage.getItem('List'));
    let parseObjt = validataLocalStorage;
    if(parseObjt != null) {
      for (let k = 0; k < parseObjt.length; k++) {
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
    let book = new Library(title, author);
    let getDataLocalStorage = localStorage.getItem('List');
      if(getDataLocalStorage !== null) {
        let validationStorage = JSON.parse(localStorage.getItem('List'));
        localStorage.setItem('List', JSON.stringify(validationStorage.concat(book)));
      } else {
        var arrSetItem = [book]; //Create ARRAY
        localStorage.setItem('List', JSON.stringify(arrSetItem));
      }
    InterfaceUser.addBookToLibrary(book);
    InterfaceUser.clearFields();
  }
});

document.getElementById('book_list').addEventListener('click', (e) => {
  InterfaceUser.deleteBook(e.target);
});

document.addEventListener('DOMContentLoaded', loadColors);
document.addEventListener('DOMContentLoaded', loadColor);


function loadColors() {
  let changeColor = document.getElementsByClassName('title');
  console.log("Si")

  for(let l = 0; l < changeColor.length; l++) {
    if (l % 2 === 0) {
      changeColor[l].style.backgroundColor = "rgba(221, 221 ,221)";
    } else {
      changeColor[l].style.backgroundColor = "rgba(255, 255 ,255)";
    }
  }
}

function loadColor() {
  let changeColors = document.getElementsByClassName('book');
  console.log("Si")

  for(let l = 0; l < changeColors.length; l++) {
    if (l % 2 === 0) {
      changeColors[l].style.backgroundColor = "rgba(221, 221 ,221)";
    } else {
      changeColors[l].style.backgroundColor = "rgba(255, 255 ,255)";
    }
  }
}