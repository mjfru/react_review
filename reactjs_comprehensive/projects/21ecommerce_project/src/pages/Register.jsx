import { Form, Link } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";

const Register = () => {
	return (
		<section className="grid h-screen place-items-center">
			<Form
				method="POST"
				className="flex flex-col p-8 shadow-lg card w-96 bg-base-100 gap-y-4"
			>
				<h4 className="text-3xl font-bold text-center">Register</h4>
				<FormInput type="text" label="username" name="username" />
				<FormInput type="email" label="email" name="email" />
				<FormInput type="password" label="password" name="password" />
				<div className="mt-4">
					<SubmitButton text="register" />
				</div>
				<p className="text-center">
					Already a member?
					<Link
						to="/login"
						className="ml-2 capitalize link link-hover link-primary"
					>
						Login
					</Link>
				</p>
			</Form>
		</section>
	);
};

export default Register;
