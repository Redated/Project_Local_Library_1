function findAuthorById(authors, id) {
  const desiredAuthor = authors.find((author) => author.id === id);
  return desiredAuthor;
}

function findBookById(books, id) {
  const desiredBook = books.find((book) => book.id === id);
  return desiredBook;
}

function partitionBooksByBorrowedStatus(books) {
  let allBooks = [];
  let checkedOut = books.filter((book) => book.borrows[0].returned === false);
  let returnedBooks = books.filter((book) => book.borrows[0].returned === true);
  allBooks[0] = checkedOut;
  allBooks[1] = returnedBooks;
  return allBooks;
}

// console.log(partitionBooksByBorrowedStatus(books));

/*
need to check book.borrows array to match transactions with accounts. 
each transaction needs account information of who had the book, and if the book has been returned.
return array of transactions for that book.
*/
function getBorrowersForBook(book, accounts) {
    // loop through book borrows, find each id in accounts, add returned to the object and add object to array
    return book.borrows.map(borrow => {
      // find the matching account for that borrow 
      const account = accounts.find(account => borrow.id === account.id);
      account.returned = borrow.returned;
      // return that account objet, with the returned key inside
      return account;
    }).slice(0,10);
  }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};