import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
							className="mt-3 menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-200"
						>
							nav links
						</ul>
					</div>
				</div>
				<div className="hidden navbar-center lg:flex">
					<ul className="menu menu-horizontal">Nav links</ul>
				</div>
				<div className="navbar-end">
					{/* Theme */}
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
