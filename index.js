function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
return   fetch('https://anapioficeandfire.com/api/books')
<<<<<<< HEAD
  .then((resp) => resp.json())
=======
  .then(resp => resp.json());
>>>>>>> 85f3b58c7a013f13c5ca6b7d5366ea0cdfe600a1
  .then((json)=> {renderBooks(json);}
  );
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}



document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
