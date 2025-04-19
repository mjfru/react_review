import sublinks from "./data";

const Navlinks = () => {
	return (
		<div className="nav-links">
			{sublinks.map((sublink) => {
				const { pageId, page } = sublink;
				return (
					<button className="nav-link" key={pageId}>
						{page}
					</button>
				);
			})}
		</div>
	);
};

export default Navlinks;
