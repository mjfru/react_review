import riga from "@/images/riga.jpg";
import Image from "next/image";

function page({ params }: { params: { id: string } }) {
	const { id } = params;
	return (
		<div>
			<h1 className="text-4xl">ID: {id}</h1>
			<section className="flex gap-x-4 mt-4">
				{/* Local Image Example */}
				<div>
					<Image
						src={riga}
						alt="Riga"
						priority
						width={192}
						height={192}
						className="w-48 h-48 object-cover rounded"
					/>
					<h2>Local Image</h2>
				</div>
				{/* Remote-hosted Image Example */}
				<div></div>
			</section>
		</div>
	);
}

export default page;
