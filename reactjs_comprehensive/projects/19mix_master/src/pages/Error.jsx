import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import errorImg from "../assets/not-found.svg";

const Error = () => {
	const error = useRouteError();
	console.log(error);
	if (error.status === 404) {
		return (
			<Wrapper>
				<div>
					<img src={errorImg} alt="not found" />
					<h3>Oops!</h3>
					<p>That page doesn't exist...but it might someday!</p>
					<Link to="/">Back to Safety</Link>
				</div>
			</Wrapper>
		);
	}
	return <Wrapper>
    <div>
      <h3>Something went wrong...</h3>
    </div>
  </Wrapper>
};

export default Error;
