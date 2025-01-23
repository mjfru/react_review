import { useState } from "react";

const ErrorExample = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<h2>useState error example</h2>
      <h3>Count: {count}</h3>
      <button className="btn" onClick={() => setCount(count + 1)}>Increase Count</button>
		</>
	);
};

export default ErrorExample;
