import { useGlobalContext } from "./Context";
import sublinks from "./data";
import { useRef } from "react";

const Submenu = () => {
	const { pageId, setPageId } = useGlobalContext();
	const currentPage = sublinks.find((item) => item.pageId === pageId);

	// const submenuContainer = useRef(null);

	const handleMouseLeave = (e) => {
		// const submenu = submenuContainer.current;
		// console.log(submenu);
		// const { clientX, clientY } = e;
		// console.log(clientX, clientY);
		setPageId(null);
	};

	return (
		<div
			className={currentPage ? "submenu show-submenu" : "submenu"}
			onMouseLeave={handleMouseLeave}
			// ref={submenuContainer}
		>
			<h5>{currentPage?.page}</h5>
			<div
				className="submenu-links"
				style={{
					gridTemplateColumns:
						currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
				}}
			>
				{currentPage?.links?.map((link) => {
					const { id, url, label, icon } = link;
					return (
						<a key={id} href={url}>
							{icon} {label}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Submenu;
