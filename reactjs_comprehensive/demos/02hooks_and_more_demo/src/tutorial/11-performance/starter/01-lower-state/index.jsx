import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import Counter from "./Counter";
const LowerState = () => {
	const [people, setPeople] = useState(data);
	//! Lowered to Counter.jsx
	// const [count, setCount] = useState(0);

	return (
		<section>
			{/* <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button> */}
			<Counter />
			<List people={people} />
		</section>
	);
};
export default LowerState;
