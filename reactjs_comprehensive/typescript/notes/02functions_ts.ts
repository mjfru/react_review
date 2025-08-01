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
