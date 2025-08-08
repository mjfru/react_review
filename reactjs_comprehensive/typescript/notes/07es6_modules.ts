//! ES6 Modules
/*
 * TypeScript will complain about sharing variables across files within the same main directory.
 * To fix this issue with global variables, we can change the configuration or use imports and exports
 */

export let something = "something";

/*
? If you don't want to import/export, add "moduleDectection": "force" to the tsconfig file.
*/

export function sayHello(name: string): void {
	console.log(`Hello, ${name}`);
}

export let person = "James";

export type Student = {
	name: string;
	age: number;
};

const newStudent: Student = {
	name: "John",
	age: 22,
};

export default newStudent;

//In a pretend, new file...
// import newStudent, { sayHello, person } from "./actions";

sayHello("TypeScript");
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
	name: "Bob",
	age: 23,
};
