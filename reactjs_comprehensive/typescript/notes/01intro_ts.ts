//* In JavaScript, variables can change, as well as their type.

/*
* In JS, this is valid:
let variable = 45
variable = true
? In TS, it is not.
*/

//! TypeScript builds on JavaScript by adding...types, helping us to catch errors early!

// Adding a type :string, :boolean, etc...It can now never be something other than a string.
let myName: string = "Matt";
console.log(myName);

// myName = 46 - Error, won't work, we changed the type of the variable

let amount: number = 24;
amount = 34 - 2; // This is OK, the variable changes but it's still a number

let isHungry: boolean = true;
isHungry = false;

//* Declaring the type is not required, TypeScript will infer the type if none is provided.

// Challenge
//TODO Create a variable of type string and invoke a string method on it
let greeting: string = "good evening, typescript!";
greeting = greeting.toUpperCase();

//TODO Create a variable of type number and try to perform a mathematical operation on it.
let luckyNumber: number = 777;
luckyNumber = luckyNumber + 5;

//TODO Create a variable of type boolean and type to perform a logical operation on it
let isLucky: boolean = luckyNumber === 777;
console.log(isLucky);

//! Union Types
//? Let's say we want something to but a number OR a string...
let tax: number | string = 10;
tax = "one-hundred"; // OK
tax = 100; // Also OK!

//? Providing the literal value for occasions when there are only a few options:
let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";

//? Any type is valid for maximum flexibility, mirrors vanilla JS.
// Be careful adding these into your application, they should be used sparingly or you lose the benefits of TS.
let notSure: any = 4;
notSure = "now a string!";
notSure = false;

const books = ["1984", "Brave New World", "Fahrenheit 451"];
let foundBook: string | undefined;

for (let book of books) {
	if (book === "1984") {
		foundBook = book;
		foundBook = foundBook.toUpperCase();
		break;
	}
}

// TS adds the optional chaining here automatically if the foundBook ends up being a string.
console.log(foundBook?.length);

//TODO - Exercise time:
let discount: number | string = 20;
discount = "20%";

let orderStatus: "processing" | "shipped" | "delivered" = "processing";

//! Objects & Arrays
//* :number[] indicates it's an array of only numbers
let prices: number[] = [100, 75, 42];
prices.push(77);

let fruit: string[] = ["apple", "orange"];
fruit.push("mango");

//? TS assumes this will always be an empty array; something to be careful of
let randomValues: [] = [];

//? This infers the type of 'any'.
let emptyValues = [];

//? TS infers a union type of string or numbers if undeclared like this:
let names = ["Peter", "Susan", 1];

//* Explicitly assigning union types
let array: (string | boolean)[] = ["apple", true, "mango", false];

//TODO - Exercise time:
let temperatures: number[] = [20, 25, 30];
let colors: string[] = ["red", "green", "blue"];

let mixedArray: (number | string)[] = [1, "two", 3];

//* Objects -- let variable: { key: value type } = { your object here }
let car: { brand: string; year: number } = { brand: "Toyota", year: 2020 };
car.brand = "Lexus";

let car1: { brand: string; year: number } = { brand: "Audi", year: 2024 };
//
let book = { title: "Book", cost: 20 };
let pen = { title: "Pen", cost: 4 };
let notebook = { title: "Notebook" };
//* Declaring an array full of objects, and what the object keys and values will be
//* Readonly makes it so the array is not able to be manipulated
//* Using the '?' is conditional, if it exists, add it. If not, that's OK.
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

//TODO - Object Exercise:
let bike: { brand: string; year: number } = { brand: "Yamaha", year: 2015 };
let laptop: { brand: string; year: number } = { brand: "Dell", year: 2021 };

let product1 = { title: "shirt", price: 20 };
let product2 = { title: "pants" };

let products: { title: string; price?: number }[] = [product1, product2];
