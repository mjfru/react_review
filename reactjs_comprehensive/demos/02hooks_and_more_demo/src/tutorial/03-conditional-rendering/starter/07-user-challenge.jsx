import { useState } from "react";

const UserChallenge = () => {
	const [user, setUser] = useState(null);

	const login = () => {
		setUser({ name: "Matt" });
	};

	const logout = () => {
		setUser(null);
	};

	return (
		<div>
			<h2>User Challenge</h2>
			{user ? (
				<div>
					<h4>Hello, {user.name}</h4>
					<button className="btn" onClick={logout}>
						Log Out
					</button>
				</div>
			) : (
				<div>
					<h4>Hello! Please Login</h4>
					<button className="btn" onClick={login}>
						Login
					</button>
				</div>
			)}
		</div>
	);
};

export default UserChallenge;
