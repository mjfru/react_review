/*

TODO:
Your task is to collect the values entered into the two input controls (<textarea> and <input>) via two-way binding.

In addition, you should pass the collected values via the appropriate props to the already existing Review component.

Important: In this Udemy workspace, you must use React.useState() instead of just useState()!

The final app should allow users to enter values and then see those entered values in the Review component which is output below the input components.

*/

//* App.jsx
function App() {
	const [userFeedback, setUserFeedback] = useState("");
	const [username, setUsername] = useState("");

	const handleFeedbackChange = (e) => {
		setUserFeedback(e.target.value);
	};

	const handleNameChange = (e) => {
		setUsername(e.target.value);
	};

	return (
		<>
			<section id="feedback">
				<h2>Please share some feedback</h2>
				<p>
					<label>Your Feedback</label>
					<textarea value={userFeedback} onChange={handleFeedbackChange} />
				</p>
				<p>
					<label>Your Name</label>
					<input type="text" value={username} onChange={handleNameChange} />
				</p>
			</section>
			<section id="draft">
				<h2>Your feedback</h2>

				<Review student={username} feedback={userFeedback} />

				<p>
					<button>Save</button>
				</p>
			</section>
		</>
	);
}

//* Review.jsx
function Review({ feedback, student }) {
	return (
		<figure>
			<blockquote>
				<p>{feedback}</p>
			</blockquote>
			<figcaption>{student}</figcaption>
		</figure>
	);
}
