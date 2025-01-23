import { useState } from "react";

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: "James",
		age: 28,
		hobby: "Coding",
	});

	// const [name, setName] = useState("James");
	// const [age, setAge] = useState(28);
	// const [hobby, setHobby] = useState("Coding");

	const displayPerson = () => {
		// setName('Matt')
		// setAge(33)
		// setHobby('Reading')
		setPerson({ name: "Matt", age: 33, hobby: "Reading" });
	};

	return (
		<>
			<h2>useState object example</h2>
			<h3>Name: {person.name}</h3>
			<h3>Age: {person.age}</h3>
			<h3>Enjoys: {person.hobby}</h3>
			<button className="btn" onClick={displayPerson}>
				Show Next
			</button>
		</>
	);
};

export default UseStateObject;
