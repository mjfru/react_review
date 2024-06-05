//! Structural Component
// import Search from "./Search";
import Logo from "./Logo";
// import NumResults from "./NumResults";

//! Utilizing Component Composition to restructure this component.
function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      {/* The logo is stateless and only really used in the Navbar, so it should live here instead of cluttering our App.jsx */}
      <Logo />
      {children}
    </nav>
  );
}

export default Navbar;
