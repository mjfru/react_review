import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info, activeId, toggleQuestion }) => {
	//! Bonus work to have only one question expanded at a given time:
	const isActive = id === activeId; // Boolean

	// const expandContent = () => {
	// 	setExpand(!expand);
	// };

	// const [expand, setExpand] = useState(false);

	return (
		<article className="question">
			<header>
				<h5>{title}</h5>
				{/* <button type="button" className="question-btn" onClick={expandContent}> */}
        {/*//! Second Version (Bonus) */}
				<button className="question-btn" onClick={() => toggleQuestion(id)}>
					{isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
				{/* {expand === false ? <AiOutlinePlus /> : <AiOutlineMinus />} */}
				{/* </button> */}
			</header>
			{isActive && <p>{info}</p>}
			{/* {expand && <p>{info}</p>} */}
		</article>
	);
};

export default SingleQuestion;
