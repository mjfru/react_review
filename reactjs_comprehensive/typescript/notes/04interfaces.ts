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
