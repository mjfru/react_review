import { useTheme, ThemeProvider } from "./context";

function ParentComponent() {
	return (
		<ThemeProvider>
			<Component />
		</ThemeProvider>
	);
}

function Component() {
	const context = useTheme();
	console.log(context);

	return (
		<div>
			<h2>React & Typescript</h2>
			<h2>Context API</h2>
      <button></button>
		</div>
	);
}
export default ParentComponent;
