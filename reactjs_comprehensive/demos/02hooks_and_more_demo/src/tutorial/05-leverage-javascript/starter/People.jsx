import { people } from "../../../data";

const People = () => {
	return (
		<div>
			<h2>People Component</h2>
			{people.map((person) => {
				return (
					<div key={person.id}>
						<p>{person.name}</p>
						{person?.nickName && <p>Nickanme: {person.nickName}</p>}
						{person?.images && (
							<img
								style={{ width: "150px" }}
								src={person.images[0].small.url}
                alt={person.name}
							></img>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default People;
