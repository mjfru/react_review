import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
	const [value, setValue] = useState(0);

	//! useRef - Still takes a default value
	// This happens DURING the initial render
	const refContainer = useRef(null);
	console.log(refContainer); // Shows an object { current: null }

	const isMounted = useRef(false);

	useEffect(() => {
		refContainer.current.focus();
	});

	// This happens, of course, AFTER the initial render, and whenever value changes
	useEffect(() => {
		// console.log(refContainer);
		console.log(isMounted);
		// Objects are truthy, so we're tapping into the current property instead to check, if it's the case, we change it to true
		if (!isMounted.current) {
			isMounted.current = true;
			return;
		}
		console.log("Re-Render");
	}, [value]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const name = refContainer.current.value;
		console.log(name);
	};

	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				<div className="form-row">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					{/* Adding a 'ref' to this */}
					<input
						type="text"
						id="name"
						className="form-input"
						ref={refContainer}
					/>
				</div>
				<button type="submit" className="btn btn-block">
					submit
				</button>
			</form>
			<h1>value : {value}</h1>
			<button onClick={() => setValue(value + 1)} className="btn">
				increase
			</button>
		</div>
	);
};

export default UseRefBasics;
