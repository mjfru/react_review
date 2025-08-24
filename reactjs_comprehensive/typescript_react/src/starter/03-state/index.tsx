import { useState } from "react";

type Link = {
	id: number;
	url: string;
	text: string;
};

const navLinks = [
	{
		id: 1,
		url: "url",
		text: "text",
	},
	{
		id: 2,
		url: "url",
		text: "text",
	},
	{
		id: 3,
		url: "url",
		text: "text",
	},
];

function Component() {
	const [text, setText] = useState("Text Example");
	const [number, setNumber] = useState(1);
	const [list, setList] = useState<string[]>([]);

	const [links, setLinks] = useState<Link[]>(navLinks);

	return (
		<div>
			<h2 className="mb-1">React & Typescript</h2>
			<button
				className="btn btn-center"
				onClick={() => {
					setNumber(2);
					setList(["hello", "world"]);
					setLinks([...links, { id: 4, url: "url", text: "text" }]);
				}}
			>
				Click Me
			</button>
		</div>
	);
}
export default Component;
