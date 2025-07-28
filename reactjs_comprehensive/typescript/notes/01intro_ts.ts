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
