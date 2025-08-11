/*
! Generics <T>
* Generics in TypeScript are like placeholders for types. They let you write functions, classes, and interfaces that work with any data type, while still keeping type safety. Instead of hardcoding string or number, you use a generic type like <T> so the type is decided when you call it.
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

async function someFunc(): Promise<string> {
	return "Goodbye, World!";
}

const result = someFunc();

//TODO Challenge - A function that takes in two parameters, a number and any type of value, and puts that number of values in an array.
// e.g. (2, 'hi') = ['hi', 'hi'];

//* This works for strings, but instead of recreating this for all primitive data types, let's use generics instead.
function generateStringArray(length: number, value: string): string[] {
	let result: string[] = [];
	result = Array(length).fill(value);
	return result;
}

function generateGenericArray<T>(length: number, value: T): Array<T> {
	let result: T[] = [];
	result = Array(length).fill(value);
	return result;
}

let arrayStrings = generateGenericArray<string>(10, "hello");
let arrayNumbers = generateGenericArray<number>(15, 100);
console.log(arrayStrings);
console.log(arrayNumbers);

//TODO Setup multiple variable types
function pair<T, U>(param1: T, param2: U): [T, U] {
	return [param1, param2];
}

let pairResult = pair<number, string>(123, "hello");


interface StoreData<T = any> {
  data: T[];
}

const storeNumbers:StoreData<number> = {
  data: [1, 2, 3, 4]
}

const randomStuff:StoreData = {
  data:['random', 1]
}