import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
	const formData = await request.formData();
	// console.log(request);
	const data = Object.fromEntries(formData);
	console.log(formData);
	console.log(data);

	try {
		const response = await axios.post(newsletterUrl, data);
		console.log(response);
		toast.success(response.data.msg);
		return redirect("/");
	} catch (error) {
		console.log(error);
		toast.error(error?.response?.data?.msg);
		return error;
	}
};

const Newsletter = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	return (
		<Form action="" className="form" method="POST">
			<h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
				Our Newsletter
			</h4>
			{/* Name */}
			<div className="form-row">
				<label htmlFor="name" className="form-label">
					Name:
				</label>
				<input
					type="text"
					name="name"
					className="form-input"
					id="name"
					required
				/>
			</div>
			<div className="form-row">
				<label htmlFor="lastName" className="form-label">
					Last Name:
				</label>
				<input
					type="text"
					name="lastName"
					className="form-input"
					id="lastName"
					required
				/>
			</div>
			<div className="form-row">
				<label htmlFor="email" className="form-label">
					Email:
				</label>
				<input
					type="text"
					name="email"
					className="form-input"
					id="email"
					defaultValue="test@test.com"
					required
				/>
			</div>
			<button
				type="submit"
				className="btn btn-block"
				style={{ marginTop: "0.5rem" }}
				disabled={isSubmitting}
			>
				{isSubmitting ? "Submitting..." : "Submit"}
			</button>
		</Form>
	);
};

export default Newsletter;
