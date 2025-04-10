import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks";

// Invoke createContext in the parent component
// Export it since we will use it elsewhere in the project:
export const NavbarContext = createContext();

// Custom Hook:
export const useAppContext = () => {
  return useContext(NavbarContext)
}

const Navbar = () => {
	const [user, setUser] = useState({ name: "Matt" });

	const handleLogout = () => {
		setUser(null);
	};

	return (
		//! No useContext (prop drilling)
		// <nav className="navbar">
		// 	<h5>Context API</h5>
		// 	<NavLinks user={user} handleLogout={handleLogout} />
		// </nav>

		//! useContext
		// In your parent container, wrap your content in the contextProvider that will 'feed' all other child components
    // The provider has a value prop, whatever is in here is accessible throughout the tree; we'll use an object inline but it can be done outside as well (and passed in).
		<NavbarContext.Provider value={{ user, handleLogout }}>
			<nav className="navbar">
				<h5>Context API</h5>
				<NavLinks />
			</nav>
		</NavbarContext.Provider>
	);
};

export default Navbar;
