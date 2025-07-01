import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
	return (
		<>
      <Header />
      <Navbar />
			<section className="py-20 align-element">
				<Outlet />
			</section>
		</>
	);
};

export default HomeLayout;
