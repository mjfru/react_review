import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, github, title, text }) => {
	return (
		<article className="duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
			<img
				src={img}
				alt={title}
				className="object-cover w-full h-64 rounded-t-lg"
			/>
			<div className="p-8 capitalize">
				<h2 className="text-xl font-medium tracking-wide">{title}</h2>
				<p className="mt-4 leading-loose text-slate-700">{text}</p>
				<div className="flex mt-4 gap-x-4">
					<a href={url}>
						<TbWorldWww className="w-8 h-8 duration-300 text-slate-500 hover:text-black" />
					</a>
					<a href={github}>
						<FaGithubSquare className="w-8 h-8 duration-300 text-slate-500 hover:text-black" />
					</a>
				</div>
			</div>
		</article>
	);
};

export default ProjectsCard;
