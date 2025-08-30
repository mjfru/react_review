"use client";
import { useState } from "react";

// Client Component Example

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div className="flex flex-col items-center w-[100px]">
			<p className="text-5xl font-bold">{count}</p>
			<button
				onClick={() => setCount(count + 1)}
				className="bg-green-400 text-white px-4 py-2 mt-4 cursor-pointer"
			>
				Increment
			</button>
		</div>
	);
}

export default Counter;
