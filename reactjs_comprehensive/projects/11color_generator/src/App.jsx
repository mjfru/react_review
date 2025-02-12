import { useState } from "react";
import ColorList from "./components/ColorList";
import Form from "./components/Form";

import { ToastContainer, toast } from "react-toastify";
import Values from "values.js";

const App = () => {
	const [colors, setColors] = useState(new Values("#18d49c").all(10));
	// console.log(new Values("#f15027").all(10));

	const addColor = (color) => {
		try {
      // console.log(color);
			const newColors = new Values(color).all(10);
			setColors(newColors);
		} catch (error) {
			console.log(error.message);
      toast.error(error.message);
		}
	};

	return (
		<main>
			<ToastContainer position="top-center" />
			<Form addColor={addColor} />
			<ColorList colors={colors} />
		</main>
	);
};
export default App;
