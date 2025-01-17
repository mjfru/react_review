/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";

//! Current standard (with or without arrow function)
function Greeting() {
	return (
    <>
		<div className="someValue">
			<h2>Oh look, another React component!</h2>
      <Person />
      <Message />
			<ul>
				<li>
					<a href="#">Linkity Link</a>
				</li>
			</ul>
		</div>
    <h2>Just showing off how to nest elements in JSX...</h2>
    <input type="text" name="" id="" />
    </>
	);
}

const Person = () => <h2>Matt</h2>;
const Message = () => {
  return <p>A message for you!</p>
}

//! Under the hood:
// function Greeting() {
// 	return React.createElement('h2', {}, 'Look, a component!');
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
