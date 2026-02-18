
// To be set as the initial state:
const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({ onSelectSquare }) {
	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// function handleSelectSquare(rowIndex, colIndex) {
	// 	// To avoid directly mutating the initialGameBoard:
	// 	setGameBoard((prevGameBoard) => {
	// 		const updatedBoard = [
	// 			...prevGameBoard.map((innerArray) => [...innerArray]),
	// 		];
	// 		updatedBoard[rowIndex][colIndex] = activePlayer;
	// 		return updatedBoard;
	// 	});

	// 	onSelectSquare();
	// }

	return (
		<ol id="game-board">
			{gameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button onClick={onSelectSquare}>{playerSymbol}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
