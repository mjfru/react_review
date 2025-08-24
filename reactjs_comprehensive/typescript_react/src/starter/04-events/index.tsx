import { useState } from "react";

function Component() {
	const [text, setText] = useState("");
	const [email, setEmail] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setEmail(e.target.value);
	};

	return (
		<section>
			<h2>React & Typescript</h2>
			<h2>Events</h2>
			<form action="" className="form">
				<input
					type="text"
					className="form-input mb-1"
					value={text}
					onChange={(e) => setText(e.target.value)}
          name="text"
				/>
				<input
					type="email"
					className="form-input mb-1"
					value={email}
					onChange={handleChange}
          name="email"
				/>
				<button type="submit" className="btn btn-block">
					Submit
				</button>
			</form>
		</section>
	);
}
export default Component;
