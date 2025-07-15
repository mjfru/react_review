import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
    const response = await customFetch.post('/auth/local/register', data)
    console.log(response, data);
    
    return redirect('/login');
  } catch {
    // const errorMessage = error?.response?.data?.error?.message || 'Please double check your login information.';
    // toast.error(errorMessage);
    return null;
  }
}
const Register = () => {

	return (
		<section className="grid h-screen place-items-center">
			<Form
				method="POST"
				className="flex flex-col p-8 shadow-lg card w-96 bg-base-100 gap-y-4"
			>
				<h4 className="text-3xl font-bold text-center">Register</h4>
				<FormInput type="text" label="username" name="username" defaultValue='James E.' />
				<FormInput type="email" label="email" name="email" defaultValue="jamese@gmail.com"/>
				<FormInput type="password" label="password" name="password" defaultValue="secretsector"/>
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
