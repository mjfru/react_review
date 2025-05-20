import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import customFetch from "./utils";
import { toast } from "react-toastify";

const Form = () => {
	const [newItemName, setNewItemName] = useState("");
	const queryClient = useQueryClient();
	// Used when creating or editing new content in React Query
	const { mutate: createTask, isLoading } = useMutation({
		// Returns a promise or error
		mutationFn: (taskTitle) => customFetch.post("/", { title: taskTitle }),
		onSuccess: () => {
      // Refetches from the server by invalidating the current query.
      // Query key must match what's in the Items.jsx
			queryClient.invalidateQueries({ queryKey: ["tasks"] });
			toast.success("task added");
			setNewItemName("");
		},
		onError: (error) => {
			toast.error(error.response.data.msg);
		},
	});
	// console.log(result);

	const handleSubmit = (e) => {
		e.preventDefault();
		createTask(newItemName);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h4>task bud</h4>
			<div className="form-control">
				<input
					type="text "
					className="form-input"
					value={newItemName}
					onChange={(e) => setNewItemName(e.target.value)}
				/>
				<button type="submit" className="btn" disabled={isLoading}>
					add task
				</button>
			</div>
		</form>
	);
};
export default Form;
