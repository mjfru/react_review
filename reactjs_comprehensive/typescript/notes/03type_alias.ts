//! Type Alias & Intersection Types

//* While this code works, it's extremely...wet.
const matt: { id: number; name: string; isActive: boolean } = {
	id: 1,
	name: "matt",
	isActive: true,
};

const ashley: { id: number; name: string; isActive: boolean } = {
	id: 1,
	name: "ashley",
	isActive: false,
};

function createUser(user: { id: number; name: string; isActive: boolean }): {
	id: number;
	name: string;
	isActive: boolean;
} {
	console.log(`Hello, ${user.name.toUpperCase()}!`);
	return user;
}

//* A type alias is a new name or short-hand for an existing type.
//* Syntax: type Name = { key1: type, key2: type, key3: type... }

type User = { id: number; name: string; isActive: boolean };

//* A new object using this type alias
const jim: User = {
	id: 2,
	name: "jim",
	isActive: true,
};

//* The same function but using a type alias instead of the long argument:
function createUser2(user: User): User {
	console.log(`Hello, ${user.name.toUpperCase()}!`);
	return user;
}

type StringOrNumber = string | number;
let value: StringOrNumber;
value = "hello";
value = 100;

type Theme = "light" | "dark"; // Allows only two options
let theme: Theme;
theme = "dark";
theme = "light";

function setTheme(t: Theme) {
	theme = t;
}
setTheme("dark");

/*
TODO - Define the Employee type: Create a type Employee with properties id (number), name (string), and department (string).

TODO - Define the Manager type: Create a type Manager with properties id (number), name (string), and employees (an array of Employee).

TODO - Create a Union Type: Define a type Staff that is a union of Employee and Manager.

TODO - Create the printStaffDetails function: This function should accept a parameter of type Staff. Inside the function, use a type guard to check if the 'employees' property exists in the passed object. If it does, print a message indicating that the person is a manager and the number of employees they manage. If it doesn't, print a message indicating that the person is an employee and the department they belong to.

TODO - Create Employee and Manager objects: Create two Employee objects. One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.

TODO - Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.
*/

type Employee = { id: number; name: string; department: string };
type Manager = { id: number; name: string; employees: Employee[] };
type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
	if ("employees" in staff) {
		console.log(
			`${staff.name} is a manager in charge of ${staff.employees.length} employees.`
		);
	} else {
		console.log(
			`${staff.name} is an employee in the ${staff.department.toUpperCase()}`
		);
	}
}

const alice: Employee = { id: 1, name: "alice", department: "sales" };
const steve: Employee = { id: 2, name: "steve", department: "hr" };
const bob: Manager = { id: 1, name: "bob", employees: [alice, steve] };

//! Intersection Types
type Book = { id: number; name: string; price: number };

const book1: Book = {
	id: 1,
	name: "Fifty-Two Stories",
	price: 15,
};
const book2: Book = {
	id: 2,
	name: "Crime & Punishment",
	price: 20,
};

//? What can we do in this situation? Another type would be a lot of writing.
//* The intersection type solves problems like this. TypeAlias&{new type}
const discountedBook: Book&{discount: number} = {
	id: 3,
	name: "War & Peace",
	price: 25,
	discount: 0.15,
};

//* OR, make a new type Alias:
/*
type DiscountedBook = Book & { discount: number };
*/