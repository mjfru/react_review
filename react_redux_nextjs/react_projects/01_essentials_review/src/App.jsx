import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function generateRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

function Header() {
	const description = reactDescriptions[generateRandomInt(2)];

	return (
		<header>
			<img src={reactImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}

function CoreConcept({ title, image, description }) {
	return (
		<li>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	);
}

function App() {
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						<CoreConcept
							title="Components"
							description="The core UI building block"
							image={componentsImg}
						/>
						<CoreConcept title="Props" />
						<CoreConcept />
						<CoreConcept />
					</ul>
				</section>
				<h2>Time to get started!</h2>
			</main>
		</div>
	);
}

export default App;
