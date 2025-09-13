import { Input } from "../ui/input";

function NavSearch() {
	return (
		<Input
			type="search"
			placeholder="Search products..."
			className="max-w-xs dark:bg-muted"
		></Input>
	);
}

export default NavSearch;
