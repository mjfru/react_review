import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Items from "./components/Items";
import { ToastContainer, toast } from "react-toastify";

//* Using Local Storage:
const setLocalStorage = (items) => {
	localStorage.setItem("list", JSON.stringify(items));
};

//* Getting, the long way:
// const getLocalStorage = () => {
// 	let list = localStorage.getItem("list");
// 	//? If you try to parse a 'null' value, you'll get an error. So...:
// 	if (list) {
// 		list = JSON.parse(localStorage.getItem("list"));
// 	} else {
// 		list = [];
// 	}
// 	return list;
// };

//* The short way:
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const App = () => {
	// getLocalStorage();
	//* No local storage:
	// const [items, setItems] = useState([]);
	//* Local storage:
	const [items, setItems] = useState(defaultList);

	const addItem = (itemName) => {
		const newItem = {
			name: itemName,
			completed: false,
			id: nanoid(),
		};
		const newItems = [...items, newItem];
		setItems(newItems);
		setLocalStorage(newItems);
		toast.success("Item added to your list.");
		//* Below is the non-local storage approach:
		// setItems([...items, newItem]);
	};

	const removeItem = (itemId) => {
		const newItems = items.filter((item) => item.id !== itemId);
		setItems(newItems);
		setLocalStorage(newItems);
		toast.success("Item removed!");
	};

	const editItem = (itemId) => {
		const newItems = items.map((item) => {
			if (item.id === itemId) {
				const newItem = {
					...item,
					completed: !item.completed,
				};
				return newItem;
			} else {
				return item;
			}
		});
		setItems(newItems);
		setLocalStorage(newItems);
	};

	return (
		<section className="section-center">
			<ToastContainer position="top-center" />
			<Form addItem={addItem} />
			<Items items={items} removeItem={removeItem} editItem={editItem} />
		</section>
	);
};

export default App;
