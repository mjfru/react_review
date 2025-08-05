//! Interfaces - Allows us to setup the shape for objects
//* Interchangeable with type aliases

interface BookInterface {
	//? readonly makes it unable to be modified after creation
	readonly isbn: number;
	title: string;
	author: string;
	genre?: string;

	//* Methods - No logic, just declaring what will exist in an object
	printAuthor(): void;
	//* With a parameter
	printTitle(message: string): string;

	//? Syntax for declaring an arrow-function method
	printSomething: (someValue: number) => number;
}

const deepWork: BookInterface = {
	isbn: 938,
	title: "Deep Work",
	author: "Cal Newport",
	// genre: "Self-help",
	printAuthor() {
		console.log(this.author);
	},
	printTitle(message) {
		return `${this.title} ${message}`;
	},
	// First Option
	printSomething: function (someValue: number) {
		return someValue;
	},
	// Second Option
	// printSomething2: (someValue) => {
	//   return someValue;
	// }
	// Third Option
	// printSomething3(someValue) {
	//   return someValue;
	// }
};

deepWork.printAuthor();
const result = deepWork.printTitle("is an awesome book");
console.log(result);
console.log(deepWork.printSomething(34));

//! deepWork.isbn = 444 - Will not work thanks to the readonly property

/*
TODO
- Start by defining an interface Computer using the interface keyword. This will serve as a blueprint for objects that will be of this type.
- Inside the interface, define the properties that the object should have. In this case, we have id, brand, ram, and storage.
- Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
- Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
- Also inside the interface, define any methods that the object should have. In this case, we have upgradeRam, which is a function that takes a number and returns a number.
- Now that we have our interface, we can create an object that adheres to this interface. This object should have all the properties defined in the interface (except for optional ones, which are... optional), and the methods should be implemented.
- Finally, we can use our object. We can call its upgradeRam method to increase its RAM.
*/

interface Computer {
	readonly id: number;
	brand: string;
	ram: number;
	storage?: number;

	upgradeRam(amount: number): number;
}

const newComputer: Computer = {
	id: 3256,
	brand: "Asus",
	ram: 16,
	storage: 2,

	upgradeRam(amount) {
		this.ram += amount;
		return this.ram;
	},
};

console.log(newComputer.upgradeRam(16));

//! Interfaces Extended
interface Person {
	name: string;
	getDetails(): string;
}

interface DogOwner {
	dogName: string;
	getDogDetails(): string;
}

//? We can merge interfaces like so:
interface Person {
	age: number;
}

const person: Person = {
	name: "Matt",
	age: 34,
	getDetails() {
		return `Name: ${this.name}, Age:${this.age}`;
	},
};

console.log(person.getDetails());

//? We can combine different interfaces like this:
interface StaffMember extends Person {
	employeeId: number;
}

const employee: StaffMember = {
	name: "James",
	age: 40,
	employeeId: 777,
	getDetails() {
		return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
	},
};

console.log(employee.getDetails());

interface Supervisor extends Person, DogOwner {
	managePeople(): void;
}

const supervisor = {
	name: "Rob",
	age: 51,
	dogName: "Rex",
	getDetails() {
		return `Name: ${this.name}, Age: ${this.age}`;
	},
	getDogDetails() {
		return `Name: ${this.dogName}`;
	},
	managePeople() {
		console.log("Managing people");
	},
};

supervisor.managePeople();

/*
TODO
- Define the Person interface. Start by defining a Person interface with a name property of type string.
- Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
- Define the Manager interface Then, define a Manager interface that extends Person and adds two methods: managePeople and delegateTasks. Both methods should have a return type of void.
- Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager. Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33, return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
- Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee. Then, log employee to the console.
*/

interface Human {
	name: string;
}

interface DogOwningHuman extends Human {
	dogName: string;
}

interface Boss extends Person {
	manageWorkers(): void;
	delegateTasks(): void;
}

function getEmployee(): Human | DogOwningHuman | Boss {
	const random = Math.random();
	if (random < 0.33) {
		return {
			name: "Matt",
		};
	} else if (random < 0.66) {
		return {
			name: "Sarah",
			dogName: "Buddy",
		};
	} else {
		return {
			name: "Rob",
			manageWorkers() {
				console.log("Managing workers");
			},
			delegateTasks() {
				console.log("Delegating tasks...");
			},
		};
	}
}

const employeeExample: Human | DogOwningHuman | Boss = getEmployee();
console.log(employeeExample);

//* Practice with Type Guarding & Type Predicate
function isManager(obj: Human | DogOwningHuman | Boss): obj is Boss {
	return "manageWorkers" in obj;
}

if (isManager(employeeExample)) {
	employeeExample.delegateTasks();
}
