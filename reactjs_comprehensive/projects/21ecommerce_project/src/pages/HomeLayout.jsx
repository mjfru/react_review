import { Outlet } from "react-router-dom";
import { Header } from "../components";

const HomeLayout = () => {
	return (
		<>
      <Header />
			<section className="py-20 align-element">
				<Outlet />
			</section>
		</>
	);
};

export default HomeLayout;
