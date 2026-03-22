/*
* Dynamic Styling with Inline Styles
? Your task is to help out a colleague and style a h1 element dynamically (with inline styles) depending on which button was pressed.
TODO If the "Yes" button is pressed, the h1 element should receive color: "green" as an inline style. If the "No" button is pressed, color: "red" should be applied.
TODO Initially, when no button has been clicked yet, the color should be set to "white".
TODO Important: You must use these specific colors ("green", "red", "white") - don't use any hex code or slight variations of these colors!
*/

import { useState } from "react";

function App() {
	const [color, setColor] = useState("");

	const onYesClick = () => {
		setColor("green");
	};

	const onNoClick = () => {
		setColor("red");
	};

	return (
		<div id="app">
			<h1
				style={{
					color: !color ? "white" : color === "green" ? "green" : "red",
				}}
			>
				CSS is great!
			</h1>
			<menu>
				<li>
					<button onClick={onYesClick}>Yes</button>
				</li>
				<li>
					<button onClick={onNoClick}>No</button>
				</li>
			</menu>
		</div>
	);
}

export default App;
