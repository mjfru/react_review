import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newletterAction } from "./pages/Newsletter";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			// How long the query will be cached for (in ms):
			staleTime: 1000 * 60,
		},
	},
});

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
				loader: landingLoader(queryClient),
			},
			{
				path: "cocktail/:id",
				errorElement: <SinglePageError />,
				loader: singleCocktailLoader(queryClient),
				element: <Cocktail />,
			},
			{
				path: "newsletter",
				element: <NewsLetter />,
				action: newletterAction,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};
export default App;
