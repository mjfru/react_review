import heroImg from "./assets/hero.svg";

const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>
						Messenger bag irony art party mlkshk roof party migas. Nisi
						messenger bag palo santo synth activated charcoal hell of, taiyaki
						incididunt hot chicken. Migas quis +1 tbh exercitation forage
						williamsburg.
					</p>
				</div>
				<div className="img-container">
					<img src={heroImg} alt="Woman and a web broswer" className="img" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
