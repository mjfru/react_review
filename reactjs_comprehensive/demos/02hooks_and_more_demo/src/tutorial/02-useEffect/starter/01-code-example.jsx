import { useState } from "react";

const CodeExample = () => {
	const [value, setValue] = useState(0);

	const sayHello = () => {
		console.log("Hello!");
	};

	//! This will be invoked every time the page is re-rendered / state is updated.
	sayHello();

	return (
		<div>
			<h1>value : {value}</h1>
			<button className="btn" onClick={() => setValue(value + 1)}>
				click me
			</button>
		</div>
	);
};
export default CodeExample;
