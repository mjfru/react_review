/*
! Generics <T>
*/

//* Here's the usual approach that will be applicable in almost every situation.
// let array1: string[] = ["Apple", "Banana", "Mango"];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

//? The one thing that stays the same with all three of these (besides let), we're always getting back an array.

let array1: Array<string> = ["Apple", "Banana", "Mango"];

//TODO Create a function with any type and return the same type:
//* Approach 1: The long way:
function createString(arg: string): string {
	return arg;
}

function createNumber(arg: number): number {
	return arg;
}

//* Approach 2: The 'generic' way:
function genericFunction<T>(arg: T): T {
	return arg;
}

const someStringValue = genericFunction<string>("Hello, world!");
const someNumberValue = genericFunction<number>(789);

interface GenericInterface<T> {
	value: T;
	getValue: () => T;
}

const genericString: GenericInterface<string> = {
	value: "Hello!",
	getValue() {
		return this.value;
	},
};

async function someFunc():Promise<string> {
	return "Goodbye, World!";
}

const result = someFunc();