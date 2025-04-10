//! No useContext (prop drilling)
// const UserContainer = ({ user, handleLogout }) => {
// 	return (
// 		<div className="user-container">
// 			{user ? (
// 				<>
// 					<p>Hello, {user?.name?.toUpperCase()}</p>
// 					<button className="btn" onClick={handleLogout}>
// 						Logout
// 					</button>
// 				</>
// 			) : (
// 				<p>Please Login</p>
// 			)}
// 		</div>
// 	);
// };

// import { useContext } from "react";
import { useAppContext } from "./Navbar";

//! useContext
const UserContainer = () => {
// Use the useContext hook and pass in whatever context you have going on in the parent container:
// We'll use destructuring here to grab the two values being passed through context
// 	const { user, handleLogout } = useContext(NavbarContext);

//! Combining all of the above into one custom hook:
const { user, handleLogout } = useAppContext();
	return (
		<div className="user-container">
			{user ? (
				<>
					<p>Hello, {user?.name?.toUpperCase()}</p>
					<button className="btn" onClick={handleLogout}>
						Logout
					</button>
				</>
			) : (
				<p>Please Login</p>
			)}
		</div>
	);
};

export default UserContainer;
