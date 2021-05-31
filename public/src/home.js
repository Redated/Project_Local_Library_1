function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let borrowed = books.filter((book) => book.borrows[0].returned === false);
  return borrowed.length;
}


function getMostCommonGenres(books) { 
    const counts = books.reduce((acc, book) => {
      const genre = book.genre;
      if (acc.hasOwnProperty(genre)) {
        acc[genre] += 1;
      } else {
        acc[genre] = 1;
      }

      return acc;
    }, {});
    return Object
      .entries(counts)
      .sort((a,b) => {
        return b[1] - a[1];
      })
      .slice(0,5)
      .map(subArray => { 
        return {name: subArray[0], count: subArray[1]}
      
      });
  }

function getMostPopularBooks(books) {
  const booksBorrowed = [];
  for (let obj in books) {
    book = books[obj];
      for (let i = 0; i < book.borrows.length; i++) {
      booksBorrowed.push(book.title);
    }
  }
  
  const popularMap = booksBorrowed.reduce((prev, cur) => { 
    prev[cur] = (prev[cur] || 0) + 1; 
    return prev; 
  }, []);
  
  const popularArr = Object.entries(popularMap).map(([name, count]) => ({name, count}));
  const topPopularBooks = popularArr.sort((ctPrev, ctCur) => ctCur.count - ctPrev.count).slice(0,5);
    return topPopularBooks;
}

  
  
  

function getMostPopularAuthors (books, authors) {
  let authorsBorrowed = [];
  for (let i = 0; i < books.length; i++) {
    let authorObject = authors.find(author => author.id === books[i].authorId);
      authorsBorrowed.push({
        name: `${authorObject.name.first} ${authorObject.name.last}`,
        count: books[i].borrows.length
      })
  }
  console.log(authorsBorrowed);
  let finalCount = authorsBorrowed.sort((authorA, authorB) => authorB.count - authorA.count);
  return finalCount.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
