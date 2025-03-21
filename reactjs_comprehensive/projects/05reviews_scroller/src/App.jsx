import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useState } from "react";

const App = () => {
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = people[index];

	const checkIndex = (number) => {
		if (number > people.length - 1) {
			return 0;
		}
		if (number < 0) {
			return people.length - 1;
		}
		return number;
	};

	const nextPerson = () => {
		setIndex((currentIndex) => {
			const newIndex = currentIndex + 1;
			return checkIndex(newIndex);
		});
	};

	const previousPerson = () => {
		setIndex((currentIndex) => {
			const newIndex = currentIndex - 1;
			return checkIndex(newIndex);
		});
	};

  const getRandomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkIndex(randomIndex));
    // console.log(randomIndex);
  }
  

	return (
		<main>
			<article className="review">
				<div className="img-container">
					<img src={image} alt={name} className="person-img"/>
					<span className="quote-icon">
						<FaQuoteRight />
					</span>
				</div>
				<h4 className="author">{name}</h4>
				<p className="job">{job}</p>
				<p className="info">{text}</p>
				<div className="btn-container">
					<button className="prev-btn" onClick={previousPerson}>
						<FaChevronLeft />
					</button>
					<button className="next-btn" onClick={nextPerson}>
						<FaChevronRight />
					</button>
				</div>
        <div className="btn btn-hipster" onClick={getRandomPerson}>Randomize!</div>
			</article>
		</main>
	);
};
export default App;
