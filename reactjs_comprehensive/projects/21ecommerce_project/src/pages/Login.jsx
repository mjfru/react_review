import { FormInput, SubmitButton } from "../components";
import { Form, Link } from "react-router-dom";

const Login = () => {
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
					defaultValue="test@test.com"
				/>
				<FormInput
					type="password"
					label="password"
					name="password"
					defaultValue="secret"
				/>

				<div className="mt-4">
					<SubmitButton text="LOGIN" />
				</div>
        
        <button className="btn btn-secondary btn-block" type="button">
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
