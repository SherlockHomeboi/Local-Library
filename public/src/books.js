function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const returned = true
  const checkedOut = false
  
  const booksCheckedOut = bookBorrowStatus(books, checkedOut)
  const returnedBooks = bookBorrowStatus(books, returned)
  
  return [[...booksCheckedOut], [...returnedBooks]]
}

function bookBorrowStatus(book, status) { 
return book.filter(({borrows}) => status === borrows[0].returned)
}


function getBorrowersForBook(book, accounts) {
  // return accounts that match the books borrows array + return value from book borrows
const borrowers = book.borrows
    .map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id)
      return {...borrow, ...account}
    }).slice(0, 10);
return borrowers
} 
  



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
