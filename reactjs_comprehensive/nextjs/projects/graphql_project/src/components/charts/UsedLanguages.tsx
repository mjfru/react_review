import { Repository } from "@/types";
import { calculatePopularLanguages } from "@/utils";

function UsedLanguages({ repositories }: { repositories: Repository[] }) {
	const popularLanguages = calculatePopularLanguages(repositories);
	console.log(popularLanguages);

	return <div>UsedLanguages</div>;
}

export default UsedLanguages;
