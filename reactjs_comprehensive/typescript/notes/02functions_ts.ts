//! Functions in TypeScript

// function sayHi(name) {
// console.log(name);
// }
//* With functions, parameters will be assumed to be of the 'any' type.
// We have three options: - any, - config, - declare the type annotation

function sayHi(name: string) {
	console.log(`Hi, ${name.toUpperCase()}`);
}
sayHi("matt");

//* Adding : number after the parameters indicates what it needs to return.
function calculateDiscount(price: number): number {
	const hasDiscount = true;
	if (hasDiscount) {
		return price;
	}
	return price * 0.9;
}
// Infers 'finalPrice' is a number already
const finalPrice = calculateDiscount(200);

//TODO - Create an array of names, write a function that checks if a name is in your array, taking a name as a parameter and returning a boolean.
//TODO - Use this function to check if various names are in your array and log the results.

const names: string[] = [
	"Matt",
	"Jim",
	"Kelsey",
	"Scott",
	"Austin",
	"Tyler",
	"Sam",
	"Brian",
];

function checkNames(name: string): boolean {
	return names.includes(name);
}

let nameToCheck = "Tyler";
if (checkNames(nameToCheck)) {
	console.log(`${nameToCheck} is in the list.`);
} else {
	console.log(`${nameToCheck} is not in the list.`);
}

//! Optional, Default, and Rest Parameters
//* Adding a ?: when declaring the type makes it optional.
function calculatePrice(price: number, discount?: number): number {
	//* Since discount is optional, we need to decalre a fallback value in case it isn't provided:
	return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

//* Adding a = after the type provides a default value in the parameters
function calculateScore(
	initialScore: number,
	penaltyPoints: number = 0
): number {
	return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

//* Using a Rest parameter
function sum(message: string, ...numbers: number[]): string {
	const doubled = numbers.map((num) => num * 2);
	console.log(doubled);
	let total = numbers.reduce((previous, current) => {
		return previous + current;
	}, 0);
	return `${message}${total}`;
}

let result = sum("The total is : ", 1, 2, 3, 4, 5);

//? What should we return if we're not returning...anything?
//* TS infers that the type of this is void.
function logMessage(message: string) {
	console.log(message);
}

logMessage("Hello, TypeScript");

//TODO Create a function named processInput that accepts a parameter of a union type string | number. The function should behave as follows:
//* - If the input is of type number, the function should multiply the nubmer by 2 and log the result to the console.
//* - If the input is of type string, the function should convert the string to uppercase and log the result to the console.

function processInput(input: string | number): void {
	if (typeof input === "number") {
		console.log(input * 2);
	} else {
		console.log(input.toUpperCase());
	}
}``

processInput(10);
processInput("Hello");

//! Objects as Parameters and Excess Property Checks
