/* eslint-disable react/prop-types */
const Person = ({ name, age, image }) => {
	return (
		<article className="person">
			<img src={image} alt={name} className="img" />
			<div>
				<h4>{name}</h4>
				<p>{age} years old</p>
			</div>
		</article>
	);
};

export default Person;
