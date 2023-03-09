function findAccountById(accounts, id) {
   const foundAccount = accounts.find((account) => account.id === id)
  return foundAccount
}

function sortAccountsByLastName(accounts) {
  const sortedByLastName = accounts.sort((a1, a2) => a1.name.last < a2.name.last ? -1 : 1)
           return sortedByLastName                            
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
  const counter = books.filter((book) => book.borrows.filter(borrower => { if (borrower.id === account.id) {
  total++  
  }}))
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => book.borrows[0].id === account.id && !book.borrows[0].returned)
    .map((book) => {
      book["author"] = authors.find((author) => author.id === book.authorId);
      return book;
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
