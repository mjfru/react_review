import UserContainer from "./UserContainer";

//! No useContext (prop drilling)
// const NavLinks = ({ user, handleLogout }) => {
// 	return (
// 		<div className="nav-container">
// 			<ul className="nav-links">
// 				<li>
// 					<a href="#">Home</a>
// 				</li>
// 				<li>
// 					<a href="#">About</a>
// 				</li>
// 			</ul>
// 			<UserContainer user={user} handleLogout={handleLogout} />
// 		</div>
// 	);
// };
const NavLinks = () => {
	return (
		<div className="nav-container">
			<ul className="nav-links">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
			</ul>
			<UserContainer />
		</div>
	);
};

export default NavLinks;
