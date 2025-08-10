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

function printLength(str: string | null | undefined): void {
	str ? console.log(str.length) : console.log("No string provided");
}
printLength("Hello");
printLength("");
printLength(null);
printLength(undefined);

/*
! Instance of... Type Guard
* The instanceof type guard is a way in TypeScript to check the specific class or constructor function of an object at runtime. It returns true if the object is an instance of the class or created by the constructor function, and false otherwise.

TODO - - Start by defining the function using the function keyword followed by the function name, in this case checkInput.
- Define the function's parameter. The function takes one parameter, input, which can be of type Date or string. This is denoted by input: Date | string.
- Inside the function, use an if statement to check if the input is an instance of Date. This is done using the instanceof operator.
- If the input is an instance of Date, return the year part of the date as a string. This is done by calling the getFullYear method on the input and then converting it to a string using the toString method.
- If the input is not an instance of Date (which means it must be a string), return the input as it is.
- After defining the function, you can use it by calling it with either a Date or a string as the argument. The function will return the year part of the date if a Date is passed, or the original string if a string is passed.
- You can store the return value of the function in a variable and then log it to the console to see the result.
*/

function checkInput(input: Date | string): string {
	if (input instanceof Date) {
		return input.getFullYear().toString();
	}
	return input;
}

const year = checkInput(new Date());
const randomInput = checkInput("2025");
console.log(year);
console.log(randomInput);

/*
! Type Predicate
* A type predicate is a function whose return type is a special kind of type that can be used to narrow down types within conditional blocks.
TODO - - Define the Person and Student types. Student should have a study method and Person should have a login method.
- Create a function named isStudent that takes a parameter person of type Person.
- In the function signature, specify a return type that is a type predicate: person is Student.
- In the function body, use a type assertion to treat person as a Student, and check if the study - method is not undefined. This will return true if person is a Student, and false otherwise.
- Use the isStudent function in an if statement with person as the argument.
- In the if block (where isStudent(person) is true), call the study method on person. TypeScript knows that person is a Student in this block, so this is safe.
- In the else block (where isStudent(person) is false), call the login method on person. This is safe because if person is not a Student, it must be a Person, and all Person objects have a login method.
*/

type Student = {
	name: string;
	study: () => void;
};

type User = {
	name: string;
	login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
	return Math.random() > 0.5
		? { name: "john", study: () => console.log("Studying") }
		: { name: "mary", login: () => console.log("Logging in") };
};

const examplePerson = randomPerson();

function isStudent(person: Person): person is Student {
	// return 'study' in person
	return (person as Student).study !== undefined;
}

if (isStudent(examplePerson)) {
	examplePerson.study();
} else {
	examplePerson.login();
}

/*
! Discriminated Unions & Exhaustive Check using the never type
* A discriminated union in TypeScript is a type that can be one of several different types, each identified by a unique literal property (the discriminator), allowing for type-safe handling of each possible variant.

TODO - - Write a reducer function that takes the current state and an action, and returns the new state. The reducer function should use a switch statement or if-else chain on the type property of the action to handle each action type differently.

- In the default case of the switch statement or the final else clause, perform an exhaustive check by assigning the action to a variable of type never. If there are any action types that haven't been handled, TypeScript will give a compile error.

- Implement the logic for each action type in the reducer function. This typically involves returning a new state based on the current state and the properties of the action.

- Use the reducer function in your application to handle actions and update the state.
*/

type IncrementAction = {
	type: "increment";
	amount: number;
	timestamp: number;
	user: string;
};

type DecrementAction = {
	type: "decrement";
	amount: number;
	timestamp: number;
	user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
	switch (action.type) {
		case "increment":
			return state + action.amount;
		case "decrement":
			return state - action.amount;
		default:
			const unexpectedAction: never = action;
			throw new Error(`Unexpected action: ${unexpectedAction}`);
	}
}

const newState = reducer(15, {
	user: "John",
	type: "increment",
	amount: 5,
	timestamp: 123456,
});
