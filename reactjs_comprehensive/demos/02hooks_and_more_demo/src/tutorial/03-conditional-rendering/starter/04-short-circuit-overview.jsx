import { useState } from "react";

const ShortCircuitOverview = () => {
	const [text, setText] = useState("");
	const [name, setName] = useState("Matt");

	const example = text || "Hello~!";

	return (
		<div>
			<h4>Falsy OR : {text || "Hello!"}</h4>
			<h4>Falsy AND : {text && "Hello!"}</h4>
			<h4>Truthy OR : {name || "Hello!"}</h4>
			<h4>Truthy AND : {name && "Hello!"}</h4>
			<h4>{example}</h4>
		</div>
	);
};
export default ShortCircuitOverview;
