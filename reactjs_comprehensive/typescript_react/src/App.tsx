// import Component from "./starter/01-return";
// import Component from "./starter/02-props";
// import Component from "./starter/03-state";
// import Component from "./starter/04-events";
import Component from "./starter/05-challenge";

function App() {
	return (
		<main>
			{/* <h2>React & Typescript</h2> */}
			{/* Example for Props & Return: */}
			{/* <Component name="Peter" id={123}>
        <h2>Hello there!</h2>
      </Component> */}

			{/* Example for State */}
			{/* <Component /> */}

			{/* Example for Events */}
			{/* <Component /> */}

			{/* Challenge */}
			<Component type="basic" name="Matt" />
			<Component type="advanced" name="James" email="james@yahoo.com" />
		</main>
	);
}

export default App;
