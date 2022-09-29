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
          let arrayIs = [];
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
            let arrayEmpty = [];
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
