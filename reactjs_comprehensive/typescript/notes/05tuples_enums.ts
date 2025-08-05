//! Tuples
//* Tuples let us set up an array with fixed length and order, exclusive to TS, not present in JS.

let me: [string, number] = ["Matt", 34];

let today: readonly [number, number, number] = [8, 5, 2025];
//? This works! You can prevent this from happening by adding readonly
// today.push(34)

function getPerson(): [string, number] {
	return ["Matt", 34];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);

let kelsey: [string, number?] = ["kelsey"];

//! Enums
//* Also something not present in JS, they allow us to define a set of named constants

enum ServerResponseStatus {
	Success = 200,
	Error = 500,
}

interface ServerResponse {
	result: ServerResponseStatus;
	data: string[];
}

function getServerResponse(): ServerResponse {
	return {
		result: ServerResponseStatus.Success,
		data: ["first item", "second item"],
	};
}

const response: ServerResponse = getServerResponse();
console.log(response);

/*
TODO:
- Define an enum named UserRole with members Admin, Manager, and Employee.
- Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
- Define a function named createUser that takes a User object as its parameter and returns a User object.
- Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.
*/

enum UserRole {
	Admin,
	Manager,
	Employee,
}

type User = {
	id: number;
	name: string;
	role: UserRole;
	contact: [string, string];
};

function createNewUser(user: User): User {
	return user;
}

const user: User = createNewUser({
	id: 1,
	name: "John Doe",
	role: UserRole.Admin,
	contact: ["jdoe@gmail.com", "123-456-7890"],
});
