function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then((resp) => resp.json())
  .then((data) => renderBooks(data))

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


// 1) sends a fetch request to 'https://anapioficeandfire.com/api/books'
// 2) renders book titles into the DOM by passing a JSON object to renderBooks()