/*
TODO: Your task is to enhance the demo app that's given to you such that clicking the "Yes" and "No" buttons changes the styling of the h1 heading element.
Whenever the "Yes" button is clicked, the "highlight-green" CSS class should be set on the h1 element. For the "No" button, it's the "highlight-red" class that must be applied.
If not button was clicked yet, no CSS class should be added to the h1 element.
*/

export default function App() {
	const [choice, setChoice] = React.useState(null);

	let cssClass;

	if (choice === "yes") {
		cssClass = "highlight-green";
	} else if (choice === "no") {
		cssClass = "highlight-red";
	}

	return (
		<div id="app">
			<h1 className={cssClass}>CSS is great!</h1>
			<menu>
				<li>
					<button onClick={() => setChoice("yes")}>Yes</button>
				</li>
				<li>
					<button onClick={() => setChoice("no")}>No</button>
				</li>
			</menu>
		</div>
	);
}
