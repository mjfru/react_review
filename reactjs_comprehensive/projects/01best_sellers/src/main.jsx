/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import Book from "./Book";
import { books } from "./books";
import "./styles/style.css";

const BookList = () => {
	const getBook = (id) => {
		const foundBook = books.find((book) => book.id === id);
		console.log(foundBook);
	};

	return (
		<>
    <h1>Amazon&apos;s Best Selling Books</h1>
			<section className="booklist">
				{/* <EventExamples /> */}
				{books.map((book, index) => {
					return (
						<Book
							{...book}
							key={book.id}
							getBook={getBook}
							index={`#${index + 1}`}
						/>
					);
				})}
			</section>
		</>
	);
};

// const EventExamples = () => {
// 	const handleFormInput = (e) => {
// 		console.log(e.target);
// 		console.log(e.target.name);
// 		console.log(e.target.value);
// 		console.log("Form input triggered");
// 	};

// 	const handleButtonClick = (e) => {
// 		console.log(e);
// 		alert("Clicked!");
// 	};

// 	const handleFormSubmission = (e) => {
// 		e.preventDefault();
// 		console.log("Form submitted!");
// 	};

// 	return (
// 		<section>
// 			<form onSubmit={handleFormSubmission}>
// 				<h2>Form Example</h2>
// 				<input
// 					// Using anonmyous functions instead:
// 					onChange={(e) =>
// 						console.log(`${e.target.value}: Form input triggered!`)
// 					}
// 					type="text"
// 					name="example"
// 					style={{ margin: "1rem 0" }}
// 				/>
// 				<button onClick={handleButtonClick}>Submit</button>
// 			</form>
// 		</section>
// 	);
// };

// const Author = () => {
// 	const inlineHeadingStyles = {
// 		color: "#617d98",
// 		fontSize: "0.75rem",
// 		marginTop: "0.5rem",
// 	};
// 	return <h4 style={inlineHeadingStyles}>Jeffrey Mason</h4>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
