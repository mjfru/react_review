import { useState } from "react";

const UseStateGotcha = () => {
	const [value, setValue] = useState(0);

	const handleIncrease = () => {
		// setValue(value + 1)

		// setValue((currentValue) => {
		//   return currentValue + 1;
		// })

		// console.log(value);
		// This will always be one 'behind'.

		//* Using setTimeout()
		setTimeout(() => {
			setValue((currentValue) => {
        return currentValue + 1;
      });
		}, 3000);
	};

	return (
		<>
			<h2>useState "gotcha"</h2>
			<h3>Value: {value}</h3>
			<button className="btn" onClick={handleIncrease}>
				Increase Value
			</button>
		</>
	);
};

export default UseStateGotcha;
