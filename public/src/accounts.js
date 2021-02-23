function findAccountById(accounts, id) {
  const desiredAccount = accounts.find((account) => account.id === id);
  return desiredAccount;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last < accountB.name.last ? -1 : 1);
    return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let result = 0;
  for (let i=0; i<books.length; i++) {
    let borrows = books[i].borrows;
    for(let j = 0; j < borrows.length; j++) {
      if (borrows[j].id === account.id) {
        result += 1;
      }
    }
  }  
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksCheckedOut = [];
  books.forEach(book => {
    if (!book.borrows[0].returned && book.borrows[0].id === account.id) {
      let author = authors.find(author => book.authorId === author.id) 
        booksCheckedOut.push({...book, author});
    }
    })
  
  return booksCheckedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};


