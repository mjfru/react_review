import { useState } from "react";

const Form = ({ addItem }) => {
	const [newItemName, setNewItemName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(newItemName);
		if (!newItemName) return;
		addItem(newItemName);
		setNewItemName("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h4>Grocery List</h4>
			<div className="form-control">
				<input
					type="text"
					className="form-input"
					value={newItemName}
					onChange={(e) => setNewItemName(e.target.value)}
				/>
				<button type="submit" className="btn">
					Add
				</button>
			</div>
		</form>
	);
};

export default Form;
