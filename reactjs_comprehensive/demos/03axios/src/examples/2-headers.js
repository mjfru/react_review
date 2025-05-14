import { useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";
// Accept : 'application/json'

const Headers = () => {
	const [joke, setJoke] = useState("random dad joke");

	const fetchDadJoke = async () => {
		try {
			const response = await axios(url, {
				headers: {
					Accept: "application/json",
				},
			});
      const data = response.data;
			// console.log(response);
      // console.log(data);
      setJoke(data.joke);
      
		} catch (error) {
			console.log(error.response);
		}
	};

	return (
		<section className="text-center section">
			<button className="btn" onClick={fetchDadJoke}>
				random joke
			</button>
			<p className="dad-joke">{joke}</p>
		</section>
	);
};
export default Headers;
