const FormCheckbox = ({ label, name, defaultValue, size }) => {
	return (
		<div className="form-control text-center">
			<label htmlFor={name} className="cursor-pointer label mb-2">
				<span className="capitalize label-text text-center w-full">{label}</span>
			</label>
      <div className="flex justify-center">
			<input
				type="checkbox"
				name={name}
				defaultChecked={defaultValue}
				className={`checkbox checkbox-primary ${size}`}
			/>

      </div>
		</div>
	);
};
export default FormCheckbox;
