import { nanoid } from "nanoid";

const DisplayText = ({ displayText }) => {
	return (
		<article className="lorem-text">
			{displayText.map((paragraph, index) => {
				return <p key={nanoid()}>{paragraph}</p>;
			})}
		</article>
	);
};

export default DisplayText;
