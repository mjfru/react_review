import { links } from "../data";

const Navbar = () => {
	return (
		<nav className="bg-emerald-200">
			<div className="flex flex-col py-4 align-element sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
				<h2 className="text-3xl font-bold">
					Web<span className="text-emerald-600">Dev</span>
				</h2>
				<div className="flex gap-x-3">
					{links.map((link) => {
						const { id, href, text } = link;
						return (
							<a
								key={id}
								href={href}
								className="text-lg tracking-wide capitalize duration-300 hover:text-emerald-600"
							>
								{text}
							</a>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
