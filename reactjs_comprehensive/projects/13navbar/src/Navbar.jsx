import { useState } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);

	const handleToggle = () => {
		setShowLinks(!showLinks);
	};

	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className="logo" alt="logo" />
					<button className="nav-toggle" onClick={handleToggle}>
						<FaBars />
					</button>
				</div>

					<div className={showLinks ? "links-container show-container" : "links-container"}>
						<ul className="links">
							{links.map((link) => {
								return (
									<li key={link.id}>
										<a href={link.url}>{link.text}</a>
									</li>
								);
							})}
						</ul>
					</div>

			</div>
		</nav>
	);
};

export default Navbar;
