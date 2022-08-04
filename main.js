function Library(title, author, countElemt) {
  this.title = title;
  this.author = author;
  this.countElemt = `elem_${countElemt}`;
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
    let res = 0;
    books.forEach((book) => {
      InterfaceUser.addBookToLibrary(book, res);
      res += 1;
    });
  }

  static addBookToLibrary(book, res) {
    if (res !== undefined) {
      const library = document.getElementById('book_list');
      const row = document.createElement('section');
      row.innerHTML = `
      <div class='book ${'elem_' + res}'>
        <div class="title">"${book.title}" ${'by'} ${book.author}</div>
        <div><button href="#" class='delete'>Remove</button></div><hr>
      </div>
    `;
      library.appendChild(row);
    } else {
      const library = document.getElementById('book_list');
      const row = document.createElement('section');
      row.innerHTML = `
        <div class='book ${'elem_' + res}'>
          <div class="title">"${book.title}" ${'by'} ${book.author}</div>
          <div><button href="#" class='delete'>Remove</button></div><hr>
        </div>
      `;
      library.appendChild(row);
    }
  }

  static deleteBook(element) {
    if (element.classList.contains('delete')) {
      var catchaName = element.parentElement.parentElement.className;
      catchaName = catchaName.split(' ');
      catchaName = catchaName[1];
      let compareName = catchaName;
      let getLocalStorage = JSON.parse(localStorage.getItem('List'));

      if (compareName === 'elem_0' || compareName === 'elem_1' || compareName === 'elem_2') {
        element.parentElement.parentElement.remove();
      } else if (getLocalStorage !== null && getLocalStorage.length > 1) {
          let loadLocalStore = JSON.parse(localStorage.getItem('List'));
          var arrayIs = [];
          for (let i = 0; i < loadLocalStore.length; i++) {
            let checkValue = loadLocalStore[i].countElemt;
            let selectRight = loadLocalStore[i];
            if (catchaName !== checkValue) {
              arrayIs.push(selectRight);
              localStorage.setItem('List', JSON.stringify(arrayIs));
            } else {
              element.parentElement.parentElement.remove();
            }
          }
      } else {
        let loadLocalStoreSnd = JSON.parse(localStorage.getItem('List'));
        let oneElement = loadLocalStoreSnd[0].countElemt;
          if(catchaName === oneElement) {
            var arrayEmpty = [];
            localStorage.setItem('List', JSON.stringify(arrayEmpty));
          }
        element.parentElement.parentElement.remove();
      }
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
    let countElemt = document.getElementsByTagName('section').length - 1;
    const book = new Library(title, author, countElemt);
    InterfaceUser.addBookToLibrary(book, countElemt);
    const getDataLocalStorage = localStorage.getItem('List');
    if (getDataLocalStorage !== null) {
      const validationStorage = JSON.parse(localStorage.getItem('List'));
      localStorage.setItem('List', JSON.stringify(validationStorage.concat(book)));
    } else {
      const arrSetItem = [book];
      localStorage.setItem('List', JSON.stringify(arrSetItem));
    }

    InterfaceUser.clearFields();
    loadColor();
  }
});

document.getElementById('book_list').addEventListener('click', (e) => {
  InterfaceUser.deleteBook(e.target);
});

function loadColor() {
  const changeColors = document.getElementsByClassName('book');
  for (let l = 0; l < changeColors.length; l++) {
    if (l % 2 === 0) {
      changeColors[l].style.backgroundColor = 'rgba(221, 221 ,221)';
    } else {
      changeColors[l].style.backgroundColor = 'rgba(255, 255 ,255)';
    }
  }
}

document.getElementById('add').addEventListener('click', loadColor);
document.addEventListener('DOMContentLoaded', loadColor);

// Library with Navigation
const loadList = document.getElementById('list');
loadList.addEventListener('click', () => {
  document.querySelector('.contact').style.display = 'none';
  document.getElementById('books__add').style.display = 'none';
  document.getElementById('book_list').style.display = 'block';
  document.getElementsByClassName('title_list')[0].style.display = 'flex';
  document.getElementsByClassName('unique')[0].style.display = 'flex';
  document.getElementsByClassName('title_add_book')[0].style.display = 'none';
  document.getElementsByClassName('title_footer')[0].style.display = 'none';
});

const addBook = document.getElementById('add-book');
addBook.addEventListener('click', () => {
  document.querySelector('.contact').style.display = 'none';
  document.getElementById('books__add').style.display = 'flex';
  document.getElementById('book_list').style.display = 'none';
  document.getElementsByClassName('title_list')[0].style.display = 'none';
  document.getElementsByClassName('unique')[0].style.display = 'none';
  document.getElementsByClassName('title_add_book')[0].style.display = 'flex';
  document.getElementsByClassName('title_footer')[0].style.display = 'none';
});

const loadContact = document.getElementById('contact');
loadContact.addEventListener('click', () => {
  document.querySelector('.contact').style.display = 'flex';
  document.getElementById('books__add').style.display = 'none';
  document.getElementById('book_list').style.display = 'none';
  document.getElementsByClassName('title_add_book')[0].style.display = 'none';
  document.getElementsByClassName('title_list')[0].style.display = 'none';
  document.getElementsByClassName('unique')[0].style.display = 'none';
  document.getElementsByClassName('title_footer')[0].style.display = 'flex';
});

// Date
const date = new Date();
const year = date.getFullYear();
const month = date.toLocaleString('en', { month: 'long' });
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

document.getElementById('date').innerHTML = `${month} ${day} ${year}, ${hour}:${minute}:${second}`;