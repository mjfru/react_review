import { useState } from "react";

const ShortCircuitExamples = () => {
	// falsy
	const [text, setText] = useState("");
	// truthy
	const [name, setName] = useState("Jim");
	const [user, setUser] = useState({ name: "john" });
	const [isEditing, setIsEditing] = useState(false);

	return (
		<div>
			<h2>{text || "Default Value"}</h2>
			{text && (
				<div>
					<h2>Whatever Return</h2>
					<h2>{name}</h2>
				</div>
			)}
			{user && <SomeComponent name={user.name} />}
			<h2 style={{ margin: "1rem 0" }}>Ternary Operator Example</h2>
			<button className="btn">{isEditing ? "Editing..." : "Add"}</button>
			{user ? (
				<div>
					<h4>You are a user! Welcome back {user.name}</h4>
				</div>
			) : (
				<div>
					<h4>Welcome, create an account?</h4>
				</div>
			)}
		</div>
	);
};

const SomeComponent = ({ name }) => {
	return (
		<div>
			<h2>Whatever Return</h2>
			<h2>{name}</h2>
		</div>
	);
};

export default ShortCircuitExamples;
