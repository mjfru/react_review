/*
! Type Guarding
* Type guarding is a term in TS that refers to the ability to narrow down the type of an object within a certain scope.
* This is usually done using conditional statements that can check the type of an object.

? In the context of TypeScript, a type guard is some expression that performs a runtime check that guarantees the type on some scope.
*/

//TODO Challenge - 'typeof' guard

type ValueType = string | number | boolean;
let value: ValueType;

const random = Math.random();
value = random < 0.33 ? "Hello" : random < 0.66 ? 123.456 : true;

/*
TODO - Define a function checkValue that takes one parameter value of the type ValueType.
- Inside the function, use an if statement to check if the value is of type string. If it is, log the value.
- If the value is not a string, use another if statement to check if the value is of type number. If it is, log value formatted to two decimal places and then return from the function.
- If the value is neither a string nor a number, it must be a boolean. Log the string "boolean: " followed by the boolean value.
- Finally, call the checkValue function with value as the argument.
*/

function checkValue(value: ValueType): void {
	if (typeof value === "string") {
		console.log(value);
		return;
	}
	if (typeof value === "number") {
		console.log(value.toFixed(2));
		return;
	}
	console.log(`Boolean: ${value}`);
	return;
}

/*
! Equality Narrowing
* In TS, equality narrowing is a form of type narrowing that occurs when you use equality checks like === or !== in your code.

TODO - Define a function named makeSound that takes one parameter animal of type Animal.
- Inside the function, use an if statement to check if animal.type is 'dog'.
- If animal.type is 'dog', TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.
- If animal.type is not 'dog', TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.
- Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.
*/

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

function makeSound(animal: Animal): void {
	if (animal.type === "dog") {
		animal.bark();
	} else {
		animal.meow();
	}
}

/*
! Check for property
* The "in" operator in TypeScript is used to narrow down the type of a variable when used in a conditional statement.It checks if a property or method exists on an object. If it exists, TypeScript will narrow the type to the one that has this property.
TODO - Define a function named makeSound that takes one parameter animal of type Animal.
- Inside the function, use an if statement with the in operator to check if the bark method exists on the animal object.
- If the bark method exists on animal, TypeScript knows that animal is a Dog in this block. In this case, call the bark method of animal.
- If the bark method does not exist on animal, TypeScript knows that animal is a Cat in the else block. In this case, call the meow method of animal.
- Now you can call the makeSound function with an Animal as the argument. The function will call the appropriate method (bark or meow) depending on the type of the animal.
*/

function makeSound2(animal: Animal) {
	if ("bark" in animal) {
		animal.bark();
	} else {
		animal.meow();
	}
}

/*
! Truthy/Falsy Guard
* In TS, "Truthy/Falsy" guard is a simple check for a truthy or falsy value.

TODO - - Define a function named printLength that takes one parameter str which can be of type string, null, or undefined.
- Inside the function, use an if statement to check if str is truthy. In JavaScript and TypeScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).
- If str is truthy, it means it's a string (since null and undefined are falsy). In this case, log the length of str using the length property of the string.
- If str is not truthy (i.e., it's either null or undefined), log the string 'No string provided'.

- Now you can call the printLength function with a string, null, or undefined as the argument. The function will print the length of the string if a string is provided, or 'No string provided' otherwise.
*/
