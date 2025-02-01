import menu from "./data";
import { useState } from "react";

import Title from "./components/Title";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

//! Filtering from the unique categories of each menu item:
// const categories = menu.map((item) => item.category);
//! Only takes unique values, no repeats
// const categorySet = new Set(categories);
// const tempItems = ['all', ...categorySet];
// console.log(tempItems);

//! One-line version:
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
// console.log(allCategories);

const App = () => {
	const [menuItems, setMenuItems] = useState(menu);
	const [categories, setCategories] = useState(allCategories);

	const filterCategories = (category) => {
		if (category === "all") {
			setMenuItems(menu);
			return;
		}
		// console.log(category);
		const newItems = menu.filter((item) => item.category === category);
		setMenuItems(newItems);
	};

	return (
		<main>
			<div className="menu">
				<Title text="The Debugger Diner" />
				<Categories
					categories={categories}
					filterCategories={filterCategories}
				/>
				<Menu items={menuItems} />
			</div>
		</main>
	);
};
export default App;
