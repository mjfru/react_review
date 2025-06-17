import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
	return (
		<section className="py-20 bg-white" id="about">
			<div className="grid items-center gap-16 align-element md:grid-cols-2">
				<img src={aboutSvg} alt="About Image" className="w-full h-64" />
				<article>
					<SectionTitle text="Code & Coffee" />
					<p className="mt-8 leading-loose text-slate-600">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
						placeat temporibus voluptatum consequatur itaque nemo officia maxime
						obcaecati neque similique quidem laudantium aperiam, reprehenderit
						cupiditate illum, hic sint voluptates molestiae!
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;
