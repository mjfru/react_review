import { useState, useRef } from "react";
import { links, social } from "./data";
import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);

	// Using useRef:
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	const handleToggle = () => {
		// console.log(linksRef.current.getBoundingClientRect());
		setShowLinks(!showLinks);
	};

	const linkStyles = {
		height: showLinks
			? `${linksRef.current.getBoundingClientRect().height}px`
			: "0px",
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

				{/* <div className={showLinks ? "links-container show-container" : "links-container"}> */}
				<div
					className="links-container"
					ref={linksContainerRef}
					style={linkStyles}
				>
					<ul className="links" ref={linksRef}>
						{links.map((link) => {
							return (
								<li key={link.id}>
									<a href={link.url}>{link.text}</a>
								</li>
							);
						})}
					</ul>
				</div>
				{/* Social Links */}
				<ul className="social-icons">
					{social.map((socialIcon) => {
						const { id, url, icon } = socialIcon;
						return (
							<li key={id}>
								<a href={url}>{icon}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
