import { useState } from "react";

export default function Player({
	initialName,
	symbol,
	isActive,
	onChangeName,
}) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(initialName);

	const handleEditClick = () => {
		setIsEditing((editing) => !editing);
	};

	const handleChange = (e) => {
		const playerName = e.target.value;
		setPlayerName(playerName);

		if (isEditing) {
			onChangeName(symbol, playerName);
		}
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
