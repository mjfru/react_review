import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);

	// Current tab

	const fetchJobs = async () => {
		try {
			const response = await fetch(url);
			const newJobs = await response.json();
			setJobs(newJobs);
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	if (isLoading) {
		return (
			<section className="jobs-center">
				<div className="loading">Loading...</div>
			</section>
		);
	}

	return (
		<>
			<h2>Tabs Starter</h2>
			<section className="jobs-center">
				<JobInfo jobs={jobs} />
			</section>
		</>
	);
};
export default App;
