import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
	const error = useRouteError();
	console.log(error);

	return <h2>An error has occured...</h2>;
};

export default SinglePageError;
