import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import sublinks from "./data";

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();
	return (
		<aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
			<div className="sidebar-container">
				<button className="close-btn" onClick={closeSidebar}>
					<FaTimes />
				</button>
				<div className="sidebar-links">
					{sublinks.map((sublink) => {
						const { links, page, pageId } = sublink;
						return (
							<article key={pageId}>
								<h4>{page}</h4>
								<div className="sidebar-sublinks">
									{links.map((link) => {
										const { url, icon, label, id } = link;
										return (
											<a href={url} key={id}>
												{icon} {label}
											</a>
										);
									})}
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
