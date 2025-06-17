import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
	return (
		<div className="py-24 bg-emerald-200">
			<div className="grid items-center gap-8 px-8 mx-auto max-w-7xl md:grid-cols-2">
				<article>
					<h1 className="font-bold tracking-wider text-7xl">I'm Matt</h1>
					<p className="mt-4 text-3xl tracking-wide capitalize text-slate-700">
						Front-End Developer
					</p>
					<p className="mt-2 text-lg tracking-wide capitalize text-slate-700">
						Turning ideas into interactive reality
					</p>
					<div className="flex mt-4 gap-x-4">
						<a href="#">
							<FaGithubSquare className="w-8 h-8 duration-300 text-slate-500 hover:text-black" />
						</a>
						<a href="#">
							<FaLinkedin className="w-8 h-8 duration-300 text-slate-500 hover:text-black" />
						</a>
					</div>
				</article>
				<article className="hidden md:block">
					<img src={heroImg} className="h-80 lg:h-96" />
				</article>
			</div>
		</div>
	);
};

export default Hero;
