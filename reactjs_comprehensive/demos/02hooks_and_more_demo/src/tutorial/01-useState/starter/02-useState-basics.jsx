import { useState } from "react";

const UseStateBasics = () => {
	console.log(useState("hello"));
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<>
			<h2>useState basics</h2>
			<h4>You clicked {count} times.</h4>
			<button className="btn" type="button" onClick={handleClick}>Increase Count</button>
		</>
	);
};

export default UseStateBasics;
