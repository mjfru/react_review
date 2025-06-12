const Newsletter = () => {
	return (
		<form action="" className="form">
			<h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
				Our Newsletter
			</h4>
			{/* Name */}
			<div className="form-row">
				<label htmlFor="name" className="form-label">
					Name:
				</label>
				<input
					type="text"
					name="name"
					className="form-input"
					id="name"
					defaultValue="Matt"
				/>
			</div>
			<div className="form-row">
				<label htmlFor="lastName" className="form-label">
					Last Name:
				</label>
				<input
					type="text"
					name="lastName"
					className="form-input"
					id="lastName"
					defaultValue="James"
				/>
			</div>
			<div className="form-row">
				<label htmlFor="email" className="form-label">
					Email:
				</label>
				<input
					type="text"
					name="email"
					className="form-input"
					id="email"
					defaultValue="test@test.com"
				/>
			</div>
			<button
				type="submit"
				className="btn btn-block"
				style={{ marginTop: "0.5rem" }}
			>
				Submit
			</button>
		</form>
	);
};

export default Newsletter;
