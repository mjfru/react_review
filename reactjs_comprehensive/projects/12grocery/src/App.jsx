import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Items from "./components/Items";

const App = () => {
	const [items, setItems] = useState([]);

	const addItem = (itemName) => {
		const newItem = {
			name: itemName,
			completed: false,
			id: nanoid(),
		};
		setItems([...items, newItem]);
	};

	const removeItem = (itemId) => {
		const newItems = items.filter((item) => item.id !== itemId);
		setItems(newItems);
	};

	return (
		<section className="section-center">
			<Form addItem={addItem} />
			<Items items={items} removeItem={removeItem} />
		</section>
	);
};

export default App;
