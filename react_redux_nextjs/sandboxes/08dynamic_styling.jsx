/*
TODO:
Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app.

The class should be applied when the <button> is clicked for the first time.
*/

export default function App() {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
		return active;
	};

	return (
		<div>
			<p className={active ? "active" : ""}>Style me!</p>
			<button onClick={handleClick}>Toggle style</button>
		</div>
	);
}
