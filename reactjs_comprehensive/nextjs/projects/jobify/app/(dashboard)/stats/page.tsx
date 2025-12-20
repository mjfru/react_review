import { getStatsAction, getChartsDataAction } from "@/utils/actions";

async function StatsPage() {
	// const stats = await getStatsAction();
	// console.log(stats);

  const charts = await getChartsDataAction(
  )
  console.log(charts);
  
	// getChartsDataAction();

	return <h1 className="text-4xl">Stats Page</h1>;
}

export default StatsPage;
