import { useState } from "react";

const ControlledInputs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	//? Moved to inline to be more versatile
	// const handleChange = (e) => {
	// console.log(e.target.name);
	// console.log(e.target.value);
	// 	setName(e.target.value);
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		// Do something!
		console.log(name, email);
	};

	return (
		<form className="form">
			<h4>Controlled Inputs</h4>
			<div className="form-row">
				{/* htmlFor and id need to match for the focus functionality to work! */}
				<label htmlFor="name" className="form-label">
					Name
				</label>
				<input
					type="text"
					name=""
					id="name"
					className="form-input"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="form-row">
				<label htmlFor="email" className="form-label">
					Email
				</label>
				<input
					type="email"
					name=""
					id="email"
					className="form-input"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<button type="submit" className="btn btn-block">
				Submit
			</button>
		</form>
	);
};
export default ControlledInputs;
