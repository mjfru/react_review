/*
! Classes
* Serve as blueprints for creating objects and have a special 'constructor' method which is automatically called when we call 'new' keyword.
*/

class Book {
	//? In TS, we have to explicitly set the type of our properties inside of our constructor.
	//? readonly does exactly what it says, it makes the property unavailable to be modified.

	//* By default, all properties are public.
	readonly title: string;
	public author: string;
	private checkedOut: boolean = false;

	constructor(title: string, author: string) {
		this.title = title;
		this.author = author;
		//? This is not passed a parameter, so we can set it to a default property instead.
		// this.checkedOut = false;
	}

	//* Showcasing a private property/method, only available within the class:
	public checkout() {
		this.checkedOut = this.toggleCheckedOut();
	}

	public isCheckedOut() {
		return this.checkedOut;
	}

	private toggleCheckedOut() {
		return !this.checkedOut;
	}
}

const favoriteBook = new Book("1Q84", "Haruki Murakami");
// favoriteBook.checkout();
// console.log(favoriteBook);

//! Getters & Setters

class Game {
	private isOwned: boolean = true;
	constructor(
		readonly title: string,
		public platform: string,
		private rating: number
	) {}

	// Despite the name, this is a 'normal' public method on this class
	public getRating() {
		return this.rating;
	}

	//* 'Getters' start with the keyword 'get':
	get info() {
		return `${this.title} on ${this.platform} - ${this.rating}`;
	}

	//* Likewise with 'Setters':
	set newRating(newRating: number) {
		this.rating = newRating;
	}
}

const favoriteGame = new Game("Elden Ring", "PS5", 9);
favoriteGame.getRating(); // 9
favoriteGame.newRating = 10;
