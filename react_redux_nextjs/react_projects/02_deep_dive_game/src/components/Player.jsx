import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(initialName);

	const handleEditClick = () => {
		setIsEditing((editing) => !editing);
	};

	const handleChange = (e) => {
		setPlayerName(e.target.value);
	};

	return (
		<li className={isActive && "active"}>
			<span className="player">
				{isEditing ? (
					<input
						type="text"
						value={playerName}
						required
						onChange={handleChange}
					/>
				) : (
					<span className="player-name">{playerName}</span>
				)}

				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
