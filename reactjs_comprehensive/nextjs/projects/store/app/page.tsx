import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProduct from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";

function HomePage() {
	return (
		<>
			<Hero />
			<Suspense fallback={<LoadingContainer />}>
				<FeaturedProduct />
			</Suspense>
		</>
	);
}

export default HomePage;
