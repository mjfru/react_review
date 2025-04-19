import { useGlobalContext } from "./Context";
import sublinks from "./data";

const Navlinks = () => {
	const { setPageId } = useGlobalContext();
	return (
		<div className="nav-links">
			{sublinks.map((sublink) => {
				const { pageId, page } = sublink;
				return (
					<button
						className="nav-link"
						key={pageId}
						onMouseEnter={() => setPageId(pageId)}
					>
						{page}
					</button>
				);
			})}
		</div>
	);
};

export default Navlinks;
