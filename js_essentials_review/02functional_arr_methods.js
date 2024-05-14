//! Functional Array Methods - Essential Mastery Needed for React!

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();

/*
! .map()
* The .map method loops over an array and returns a new one with the same length with some operation applied to it.
*/

//? The array .map( (a name you choose for each item in the array) => what you want done to each item )
const arrayExample = [1, 2, 3, 4, 5].map((arrayItem) => arrayItem * 2);
console.log(arrayExample);

//? Let's get a new array of just the titles of books (remember, this is an array with objects in it.)
const titles = books.map(book => book.title);
console.log(titles);

const essentialData = books.map(book => ({
  title: book.title,
  author: book.author
}));
console.log(essentialData);

/*
! .filter()
* Filters some elements out of an array and returns a new one without the specified results.
* Because .filter() returns an array, we can continue to call .filter(), .map(), etc. on it to make more specifications.
*/
//? Variable to be stored in = Original array.filter(each item in the array, true/false condition (or, just use the && operator...))
const longBooks = books.filter(book => book.pages > 500).filter(book => book.hasMovieAdaptation);
console.log(longBooks);

const adventureBooks = books.filter((book) => 
  book.genres.includes("adventure"))
  .map(book => book.title);
console.log(adventureBooks);

/*
! .reduce()
* The most versatile of array methods, the goal is to REDUCE the entire array into a single value.
*/
//? Variable to be stored in = Original array.reduce(callback function with an accumulator, starting value)
//? The accumulator is the current value of the final value of what we want to boil it down to.
const pagesOfAllBooks = books.reduce((accumulator, book) => accumulator + book.pages, 0);
console.log(pagesOfAllBooks); // 3227

/*
! .sort()
* Unlike the previous method, this one DOES mutate the original array, something we don't want to happen in React.
* A work-around is to make a copy with array.slice.sort(...)
*/

const sortDemo = [3, 7, 1, 9, 6];
// Ascending order
const sorted = sortDemo.sort((a,b) => a - b) // b - a for descending
console.log(sorted);

// Descending list of books
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

/*
! Working with Immutable Arrays

*/

// 1. Add a book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling"
};

const booksAfterAdd = [ ...books, newBook ];
console.log(booksAfterAdd);

// 2. Delete a book object from an array
//? Give me a new array, booksAfterDelete, from filtering booksAfterAdd. This array should contain everything except the book with the id of 3.
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete)

// 3. Update a book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) => book.id === 1 ? {...book, pages: 2000} : book)
console.log(booksAfterUpdate)