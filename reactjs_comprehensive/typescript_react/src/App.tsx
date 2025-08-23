// import Component from "./starter/01-return";
import Component from "./starter/02-props";

function App() {
	return (
		<main>
			{/* <h2>React & Typescript</h2> */}
			<Component name="Peter" id={123}>
        <h2>Hello there!</h2>
      </Component>
		</main>
	);
}

export default App;
