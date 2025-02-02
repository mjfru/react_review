const ButtonContainer = ({ jobs, currentTab, setCurrentTab }) => {
	return (
		<div className="btn-container">
			{jobs.map((job, index) => {
				return (
					<button
						key={job.id}
						onClick={() => setCurrentTab(index)}
						className={index === currentTab ? "job-btn active-btn" : "job-btn"}
					>
						{job.company}
					</button>
				);
			})}
		</div>
	);
};

export default ButtonContainer;
