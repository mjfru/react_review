import { useState } from "react";
import { formatPrice } from "../utils/index";

const FormRange = ({ label, name, size, price }) => {
	const step = 1000;
	const maxPrice = 100000;
	const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);

	return (
		<div className="form-control">
			<label htmlFor={name} className="cursor-pointer label">
				<span className="capitalize label-text">{label}</span>
				<span>{formatPrice(selectedPrice)}</span>
			</label>
			<input
				type="range"
				name={name}
				min={0}
				max={maxPrice}
				value={selectedPrice}
				onChange={(e) => setSelectedPrice(e.target.value)}
				step={step}
				className={`range range-primary ${size}`}
			/>
      <div className="flex justify-between w-full px-2 mt-2 text-xs">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max: {formatPrice(maxPrice)}</span>
        
      </div>
		</div>
	);
};

export default FormRange;
