import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import ButtonContainer from "./components/ButtonContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [jobs, setJobs] = useState([]);
	const [currentTab, setCurrentTab] = useState([0]);

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
			<section className="jobs-center">
				<ButtonContainer
					jobs={jobs}
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				/>
				<JobInfo jobs={jobs} currentTab={currentTab} />
			</section>
		</>
	);
};
export default App;
