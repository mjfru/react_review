import { useState, useRef } from "react";

export default function Player() {
	const playerName = useRef();

	const [enteredPlayerName, setPlayerName] = useState(null);
	// const [submitted, setSubmitted] = useState(false);

	// function handleChange(e) {
	// 	setSubmitted(false);
	// 	setPlayerName(e.target.value);
	// }

	function handleClick() {
		// setSubmitted(!submitted);
		setPlayerName(playerName.current.value);
		//* Directly overwriting to clear user input - not best practice:
    playerName.current.value = "";
	}

	return (
		<section id="player">
			<h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
			<p>
				<input
					ref={playerName}
					// onChange={handleChange}
					type="text"
					// value={playerName}
				/>
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}
