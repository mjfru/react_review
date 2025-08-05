//! Type Assesertions, Type Unknown, Type Never
//* A type assertion tells the browser what type an existing variable is; useful for when we know more about the type than TS does.

let someValue: any = "This is a string";
let strLength: number = (someValue as string).length;

type Bird = {
	name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"name": "Lab"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

//? Use case
enum Status {
	Pending = "pending",
	Declined = "declined",
}

type UserEx = {
	name: string;
	status: Status;
};
// save Status.pending in the DB as a string
// retrieve string from DB:
// const statusValue = 'pending';
// const userInstance: User = { name: 'Matt', status: statusValue as Status }

//! Type Unknown - A type-safe counterpart of any type.
//? Essentially like saying that a variable could be anything, but we need to perform some type-checking before we can use it.

let unknownValue: unknown;
unknownValue = "hello world!";
unknownValue = ["1", "We", true];
unknownValue = 4234;

//* We cannot do this with type unknown:
// unknownValue.toFixed(2);

if (typeof unknownValue === "number") {
	unknownValue.toFixed(2);
	// We can do this now once we check the type
}

function runSomeCode() {
	const random = Math.random();
	if (random < 0.5) {
		throw new Error("There was an error");
	} else {
		throw "Some error";
	}
}

try {
	runSomeCode();
} catch (error) {
	if (error instanceof Error) {
		console.log(error.message);
	} else {
		console.log(error);
	}
}

//! Type Never - A type that represents the type of values that can never occur; you can't assign any value to a variable of type never.
//? TS will give a compile error if there are any unhandled cases, helping ensure that all cases are handled.

type Theme = "light" | "dark";

function checkTheme(theme: Theme): void {
	if (theme === "light") {
		console.log("light theme");
		return;
	}
	if (theme === "dark") {
		console.log("dark theme");
		return;
	}
	//* If you type theme again, it will have type: never because you've exhausted all the possible choices/cases
	theme;
}

enum Color {
	Red,
	Blue,
	Green,
}

function getColorName(color: Color) {
	switch (color) {
		case Color.Red:
			return "Red";
		case Color.Blue:
			return "Blue";
		case Color.Green:
			return "Green";
		default:
			// At build time:
			let unexpectedColor: never = color;
      // At runtime:
			throw new Error(`Unexpected color value: ${color}`);
	}
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
// Below will fail because we're not handling this case
console.log(getColorName(Color.Green));
