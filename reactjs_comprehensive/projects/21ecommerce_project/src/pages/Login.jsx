import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormInput, SubmitButton } from "../components";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";

// eslint-disable-next-line react-refresh/only-export-components
export const action =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		try {
			const response = await customFetch.post("/auth/local", data);
			store.dispatch(loginUser(response.data));
			return redirect("/");
		} catch {
			return null;
		}
	};

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const loginAsGuest = async () => {
		try {
			const response = await customFetch.post("/auth/local", {
				identifier: "test@test.com",
				password: "secret",
			});
			dispatch(loginUser(response.data));
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="grid h-screen place-items-center">
			<Form
				method="post"
				className="flex flex-col p-8 px-8 shadow-lg bg-base-100 gap-y-4"
			>
				<h4 className="text-3xl font-bold text-center">Login</h4>
				<FormInput
					type="email"
					label="email"
					name="identifier"
					// defaultValue="test@test.com"
				/>
				<FormInput
					type="password"
					label="password"
					name="password"
					// defaultValue="secret"
				/>

				<div className="mt-4">
					<SubmitButton text="LOGIN" />
				</div>

				<button
					className="btn btn-secondary btn-block"
					type="button"
					onClick={loginAsGuest}
				>
					Guest User
				</button>
				<p className="text-center">
					Not a member yet?
					<Link
						to="/register"
						className="ml-2 capitalize link link-hover link-primary"
					>
						Register
					</Link>
				</p>
			</Form>
		</section>
	);
};

export default Login;
