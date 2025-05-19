import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./utils";

const Items = () => {
	const { isLoading, data, error, isError } = useQuery({
		queryKey: ["tasks"],
		queryFn: () => customFetch.get("/"),
		/*  
  ? If you don't want to use the nested structure below (data.data...)  
  queryFn: async() => {
      const { data } = await customFetch.get('/')
      return data;
    } 
  */
	});
	console.log(isLoading, data);

	if (isLoading) {
		return <p style={{ marginTop: "1rem" }}>Loading...</p>;
	}

	if (isError) {
		return <p style={{ marginTop: "1rem" }}>An error occured.</p>;
	}

	// if (error) {
	// 	return <p style={{ marginTop: "1rem" }}>{error.message}</p>;
	// }

	return (
		<div className="items">
			{/* Although it looks strange, we no longer accept props and can do this all from React Query, it's just a bit nested at the moment. */}
			{data.data.taskList.map((item) => {
				return <SingleItem key={item.id} item={item} />;
			})}
		</div>
	);
};
export default Items;
