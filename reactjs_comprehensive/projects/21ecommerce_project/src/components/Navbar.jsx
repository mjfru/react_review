import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import NavLinks from "./NavLinks";

const themes = {
	abyss: "abyss",
	fantasy: "fantasy",
};

// Get the local storage value when the component mounts:
const getLSTheme = () => {
  return localStorage.getItem('theme') || themes.fantasy;
}

const Navbar = () => {
	const [theme, setTheme] = useState(getLSTheme);

	const handleThemeChange = () => {
    const { abyss, fantasy } = themes;
    const newTheme = theme === fantasy ? abyss : fantasy
		
    document.documentElement.setAttribute('data-theme', theme);
    setTheme(newTheme);
	};

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme])

	return (
		<nav className="bg-base-200">
			<div className="navbar align-element">
				<div className="navbar-start">
					{/* Title */}
					<NavLink
						to="/"
						className="items-center hidden text-3xl lg:flex btn btn-primary"
					>
						C
					</NavLink>

					{/* Dropdown */}
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<FaBarsStaggered className="w-6 h-6" />
						</label>
						<ul
							tabIndex={0}
							className="mt-3 menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52"
						>
							<NavLinks />
						</ul>
					</div>
				</div>

				<div className="hidden navbar-center lg:flex">
					<ul className="menu menu-horizontal">
						<NavLinks />
					</ul>
				</div>

				<div className="navbar-end">
					{/* Theme */}
					<label className="swap swap-rotate">
						<input type="checkbox" onChange={handleThemeChange} />
						{/* Sun Icon */}
						<BsSunFill className="h-4 swap-on" />
						{/* Moon Icon */}
						<BsMoonFill className="h-4 swap-off" />
					</label>

					{/* Cart */}
					<NavLink to="/cart" className="ml-4 btn btn-ghost btn-circle btn-md">
						<div className="indicator">
							<BsCart3 className="w-6 h-6" />
							<span className="badge badge-sm badge-primary indicator-item">
								7
							</span>
						</div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
