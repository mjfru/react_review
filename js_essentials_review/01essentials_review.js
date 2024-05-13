//! Destructuring, Rest, & Spread
//! Notes / Examples Below the Data!

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

//! Destructuring
//* Useful when we need to get specific data from an object or array

const book = getBook(1);
// const title = book.title;
// const author = book.author;

//* Instead of writing on line of code per thing we need, we can throw it all in one line.

//? { what do you want (exactly the same name) } = { where it's coming from / contained }
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;
console.log(author, title, publicationDate, hasMovieAdaptation);

//* With arrays, instead of relying on the property names to specify what you want to pull out, we use the indices instead.
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// console.log(primaryGenre, secondaryGenre); // science fiction humor
//? A better way than this is using destructuring:
const [ primaryGenre, secondaryGenre ] = genres;
//! Order matters here, not what you call them
console.log(primaryGenre, secondaryGenre); // science fiction humor


//! Rest & Spread
//* The Rest Operator (...), automatically creates an array of all the values we haven't previously destructured.
const [ genreOne, genreTwo, ...otherGenres ] = genres;
console.log(otherGenres); // speculative fiction, short stories, fantasy

//* The Spread Operator (also '...'), usable on arrays and objects, takes all the values of out an array and places them into a new one.
//* This allows us to work with arrays in React to copy them and change them instead of mutating them in place.
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

//? With Objects:
//* Get all the properties of the book (from const book = getBook(1)), and add this key-value pair to it and update the existing 'pages' one.
const updatedBook = {
  //* Grabbing everything from the original book object and making a copy
  ...book,
  //* Adding a new key-value pair to it
  moviePublicationDate: '2001-12-19',
  //* Updating an existing one
  pages: 1210 };
console.log(updatedBook);

//! Ternary Practice
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${publicationDate.split("-")[0]}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;

console.log(summary)

//! Arrow Function Practice
const getYear = (str) => {
  return str.split("-")[0];
} //? Could also be done in one line

console.log(getYear(publicationDate));

//! Short-Circuiting w/ && and ||
//* If what is on the left is true, return the second value.
//* Works with truthy and falsy values.
console.log(true && 'Some string') // Some string -- NO short-circuiting
console.log(false && 'Some string'); // false -- Short circuited!

//! || Operator - Short-circuits when the first value is true, returns it.
console.log(true || "Some string"); // true
console.log(false || "Some string");  // Some string

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "Not yet translated.";
console.log(spanishTranslation);

console.log(book.reviews.librarything.reviewsCount); // 452
const countWrong = book.reviews.librarything.reviewsCount || 'No data';
console.log(countWrong);

//! New - Nullish Coalescing Operator '??'
//* Only returns the second value when the first value is null or undefined.
const count = book.reviews.librarything.reviewsCount ?? 'No data';


//! Optional Chaining Operator
//? How can we get the total number of review from both of our sources?
//? What do we do if one of the values we need is undefined or null?
//* Optional Chaining asks JS to only keep and read properties that actually exist.

function getTotalReviewCount(book) {
  const goodReads = book.reviews.goodReads?.reviewsCount;
  // It will no longer try to read this out if it doesn't exist, then we give it the value of zero instead to be added to the total.
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodReads + librarything;
}

getTotalReviewCount(book); // 812