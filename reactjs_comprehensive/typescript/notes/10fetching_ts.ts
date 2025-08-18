/*
! Fetching Data with TypeScript
? Typically, Axios and React Query are used for this functionality.
*/

const url = "https://www.course-api.com/react-tours-project";

async function fetchData(url: string) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP Error Status:${response.status}`);
		}
		const data = await response.json();
		console.log(data);

		return data;
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "There was an error...";
		console.log(errorMessage);
		return [];
	}
}

// fetchData(url);

//TODO Challenge: Setup the type and provide the correct return type:
// const tours = fetchData(url);
// tours.map((tour: any) => {
//   console.log(tour.name);
// })