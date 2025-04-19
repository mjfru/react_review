import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	// const [isModalOpen, setIsModalOpen] = useState(false);
	const [pageId, setPageId] = useState(null);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	// const openModal = () => {
	// 	setIsModalOpen(true);
	// };

	// const closeModal = () => {
	// 	setIsModalOpen(false);
	// };

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				// isModalOpen,
				// openModal,
				// closeModal,
				openSidebar,
				closeSidebar,
				pageId,
				setPageId,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
