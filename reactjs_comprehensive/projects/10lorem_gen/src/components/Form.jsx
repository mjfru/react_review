import { useState } from "react";
import text from "../data";
import DisplayText from "./DisplayText";

const Form = () => {
	const [amount, setAmount] = useState(1);
	const [displayText, setDisplayText] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		let numOfParagraphs = parseInt(amount);
		setDisplayText(text.slice(0, numOfParagraphs));
		setAmount(1);
	};

	const handleClear = (e) => {
		e.preventDefault();
		setDisplayText([]);
		setAmount(1);
	};

	return (
		<>
			<form className="lorem-form" onSubmit={handleSubmit}>
				<label htmlFor="amount">Number of Paragraphs:</label>
				<input
					type="number"
					name="amount"
					id="amount"
					min="1"
					max="8"
					step="1"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
				/>
				<button type="submit" className="btn">
					Generate Text
				</button>
				<button type="btn" className="btn btn-hipster" onClick={handleClear}>
					Clear All
				</button>
			</form>
			<DisplayText displayText={displayText} />
		</>
	);
};

export default Form;
