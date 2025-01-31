import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, toggleQuestion }) => {
	return (
		<section className="container">
      <h1>FAQ</h1>
			{questions.map((question) => {
				return (
					<SingleQuestion
						key={question.id}
						activeId={activeId}
						{...question}
						toggleQuestion={toggleQuestion}
					/>
				);
			})}
		</section>
	);
};

export default Questions;
