import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		// Setup async function inside of useEffect
		const fetchData = async () => {
			try {
				// Store the fetched response in this const.
				const response = await fetch(url);
				// Turn the above const into readable JSON and store it
				const users = await response.json();
				console.log(users);
				setUsers(users);
			} catch (error) {
				console.log(error);
			}
		};
		// Invoke the function we just wrote on intial render
		fetchData();
	}, []);

	return (
		<section>
			<h3>Github Users</h3>
			<ul className="users">
				{users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
					return <li key={id}>
            <img src={avatar_url} alt={login} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>Profile</a>
            </div>
          </li>;
				})}
			</ul>
		</section>
	);
};
export default FetchData;
