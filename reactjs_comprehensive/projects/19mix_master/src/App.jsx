import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	About,
	Landing,
	Error,
	NewsLetter,
	Cocktail,
	HomeLayout,
	SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />, // Global Error Page
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <SinglePageError />,
				loader: landingLoader,
			},
			{
				path: "cocktail/:id",
				element: <Cocktail />,
			},
			{
				path: "newsletter",
				element: <NewsLetter />,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
