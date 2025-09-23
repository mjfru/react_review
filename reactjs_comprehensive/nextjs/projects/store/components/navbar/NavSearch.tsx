"use client";
import { Input } from "../ui/input";
//? Client components, like this, use useSearchParams
//* Server components use searchParams as a prop
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect, Suspense } from "react";

function NavSearch() {
	const searchParams = useSearchParams();
	console.log(searchParams);
	const { replace } = useRouter();
	const [search, setSearch] = useState(
		searchParams.get("search")?.toString() || ""
	);

	const handleSearch = useDebouncedCallback((value: string) => {
		const params = new URLSearchParams(searchParams);
		if (value) {
			params.set("search", value);
		} else {
			params.delete("search");
		}
		replace(`/products?${params.toString()}`);
	}, 450);

	useEffect(() => {
		if (!searchParams.get("search")) {
			setSearch("");
		}
	}, [searchParams.get("search")]);

	return (
		<Input
			type="search"
			placeholder="Search products..."
			className="max-w-xs dark:bg-muted"
			onChange={(e) => {
				setSearch(e.target.value);
				// For navigation:
				handleSearch(e.target.value);
			}}
			value={search}
		/>
	);
}

export default NavSearch;
