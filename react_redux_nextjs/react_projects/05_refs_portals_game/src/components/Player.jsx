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

/*
! State:
- Causes component re-evaluation when changed
- Should be used for values that are directly reflected in the UI
- Should NOT be used for "behind the scenes" values that have no direct UI impact

! Refs:
- Do NOT cause component re-evaluation
- Can be used to gain direct DOM element access (great for reading values or accessing certain browser APIs)
*/
