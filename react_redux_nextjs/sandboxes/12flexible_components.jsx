/*

TODO:
Your task is to build a highly re-usable, custom Button component that can be used in all the following ways (also see the code in the App.js file):

"Filled" mode (default):

<Button>Default</Button>

or

<Button mode="filled">Filled</Button>

All buttons need a button CSS class - and then, depending on their mode, additional classes.

In addition, the custom Button component must accept all standard props that could be set on the built-in <button>. These props should be forwarded to the default <button> element that will be used in the custom Button component.

Your task therefore is to work on the Button component provided in the Button.js file. Don't add multiple custom components, instead work on that one provided component and make sure that it supports all these different modes & features. Also make sure, that if no mode is set, the "filled" mode is assumed as a default.
*/

//* Button.jsx
function Button({ children, className, mode = "filled", Icon, ...props }) {
	let cssClasses = `button ${mode}-button`;

	if (Icon) {
		cssClasses += " icon-button";
	}

	if (className) {
		cssClasses += " " + className;
	}

	return (
		<button className={cssClasses} {...props}>
			{Icon && (
				<span className="button-icon">
					<Icon />
				</span>
			)}
			<span>{children}</span>
		</button>
	);
}

//* App.jsx
function App() {
	return (
		<div id="app">
			<section>
				<h2>Filled Button (Default)</h2>
				<p>
					<Button>Default</Button>
				</p>
				<p>
					<Button mode="filled">Filled (Default)</Button>
				</p>
			</section>
			<section>
				<h2>Button with Outline</h2>
				<p>
					<Button mode="outline">Outline</Button>
				</p>
			</section>
			<section>
				<h2>Text-only Button</h2>
				<p>
					<Button mode="text">Text</Button>
				</p>
			</section>
			<section>
				<h2>Button with Icon</h2>
				<p>
					<Button Icon={HomeIcon}>Home</Button>
				</p>
				<p>
					<Button Icon={PlusIcon} mode="text">
						Add
					</Button>
				</p>
			</section>
			<section>
				<h2>Buttons Should Support Any Props</h2>
				<p>
					<Button mode="filled" disabled>
						Disabled
					</Button>
				</p>
				<p>
					<Button onClick={() => console.log("Clicked!")}>Click me</Button>
				</p>
			</section>
		</div>
	);
}
