import { useState, useTransition } from "react";
import { lazy } from "react";
import { Suspense } from "react";

const SlowComponent = lazy(() => import("./SlowComponent"));

const LatestReact = () => {
	const [text, setText] = useState("");
	const [items, setItems] = useState([]);
	const [isPending, startTransition] = useTransition();

	const [show, setShow] = useState(false);

	const handleChange = (e) => {
		setText(e.target.value);

		// slow down CPU
		startTransition(() => {
			const newItems = Array.from({ length: 5000 }, (_, index) => {
				return (
					<div key={index}>
						<img src="/vite.svg" alt="" />
					</div>
				);
			});
			setItems(newItems);
		});
	};

	return (
		<section>
			<form className="form">
				<input
					type="text"
					className="form-input"
					value={text}
					onChange={handleChange}
				/>
			</form>
			<h4>Items Below</h4>
			{isPending ? (
				<h4>Loading...</h4>
			) : (
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr 1fr",
						marginTop: "2rem",
					}}
				>
					{items}
				</div>
			)}
			<button className="btn" onClick={() => setShow(!show)}>
				Toggle
			</button>
			{/* Here, we only want to load this component if the user clicks the button, no unnecessary renders! */}
			{show && 
      <Suspense fallback={<h4>Loading...</h4>}>
        <SlowComponent />
      </Suspense>
      }
		</section>
	);
};
export default LatestReact;
