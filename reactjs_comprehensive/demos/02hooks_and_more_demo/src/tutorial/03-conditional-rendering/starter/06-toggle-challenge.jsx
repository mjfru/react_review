import { useState } from "react";

const ToggleChallenge = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const toggleStatus = () => {
		setIsLoggedIn(!isLoggedIn);
	};

	return (
		<>
			<h2>Toggle Challenge</h2>
			{isLoggedIn ? (
				<div>
					<h3>Welcome Back!</h3>
					<button className="btn" onClick={toggleStatus}>
						Log Out
					</button>
				</div>
			) : (
				<div>
					<h3>Welcome!</h3>
					<button className="btn" onClick={toggleStatus}>
						Log In
					</button>
				</div>
			)}
		</>
	);
};

export default ToggleChallenge;
