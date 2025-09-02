import riga from "@/images/riga.jpg";
import Image from "next/image";

const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

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
				{/* The width and height props are needed for remote images */}
				<div>
					<Image
						src={url}
						alt="tour"
						width={192}
						height={192}
						priority
						className="w-48 h-48 object-cover rounded"
					/>
          <h2>Remote Image</h2>
				</div>
			</section>
		</div>
	);
}

export default page;
