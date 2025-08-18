/*
! Fetching Data with TypeScript
? Typically, Axios and React Query are used for this functionality.
*/

const url = "https://www.course-api.com/react-tours-project";

//TODO Part of Challenge:
type Tour = {
	id: string;
	name: string;
	info: string;
	image: string;
	price: string;
};

async function fetchData(url: string): Promise<Tour[]> {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP Error Status:${response.status}`);
		}
		const data: Tour[] = await response.json();
		console.log(data);

		return data;
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "There was an error...";
		console.log(errorMessage);
		return [];
	}
}

export {};
// fetchData(url);

//TODO Challenge: Setup the type and provide the correct return type:
const tours = await fetchData(url);
tours.map((tour) => {
	console.log(tour.name);
});