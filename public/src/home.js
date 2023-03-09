function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  // returns the number of books currently checked out
  // look at the first array object in books.borrows array for each book
  const mapped = books.filter(book => book.borrows[0].returned === false)
  let total = mapped.length
  return total
}

function getMostCommonGenres (books) {
  let genres = []
  books.forEach(book => {
    let genreExists = genres.find(genre => genre.name === book.genre)
    if (genreExists === undefined) {
      genres.push({ name: book.genre, count: 0 })
    }
  })
  
  books.forEach(book => {
  	let genre = genres.find(genre => genre.name === book.genre)
    genre.count++
  })
return genres.sort((a,b) => b.count - a.count).slice(0,5)
}
                           

function getMostPopularBooks(books) {
  let array = []
  books.forEach((book) => 
                array.push({name: book.title, count: book.borrows.length}))

  console.log(array)
return array.sort((a,b) => b.count - a.count).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  const authArray = [];
  authors.forEach((author) => {
    const filterByAuthor = books.filter((book) => book.authorId === author.id);
    let totalBorrows = 0;
    filterByAuthor.forEach((book) => (totalBorrows += book.borrows.length));
    authArray.push({
      name: author.name.first + " " + author.name.last,
      count: totalBorrows,
    });
  });
  authArray.sort((a, b) => (a.count < b.count ? 1 : -1));
  authArray.length = 5;
  return authArray;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
