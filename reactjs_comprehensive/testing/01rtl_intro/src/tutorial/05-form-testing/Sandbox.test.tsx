import { logRoles, render, screen } from "@testing-library/react";
import Sandbox from "./Sandbox";
import userEvent, { UserEvent } from "@testing-library/user-event";

const getFormElements = () => {
	const elements = {
		emailInputElement: screen.getByRole("textbox", { name: /email/i }),
		passwordInputElement: screen.getByLabelText("Password"),
		confirmPasswordElement: screen.getByLabelText(/confirm password/i),
		submitButton: screen.getByRole("button", { name: /submit/i }),
	};
	return elements;
};

describe("05-form-testing", () => {
	let user: UserEvent;
	beforeEach(() => {
		user = userEvent.setup();
		// console.log("Hello");
		render(<Sandbox />);
	});

	test("Inputs should be initially empty", () => {
		// const { container } = render(<Sandbox />);
		// screen.debug();
		// logRoles(container);
		const { emailInputElement, passwordInputElement, confirmPasswordElement } =
			getFormElements();

		expect(emailInputElement).toHaveValue("");
		expect(passwordInputElement).toHaveValue("");
		expect(confirmPasswordElement).toHaveValue("");
	});

	test("should be able to type in the input", async () => {
		const { emailInputElement, passwordInputElement, confirmPasswordElement } =
			getFormElements();

		expect(emailInputElement).toHaveValue("test@test.com");
		await user.type(passwordInputElement, "secret");
		expect(passwordInputElement).toHaveValue("secret");

		await user.type(confirmPasswordElement, "secret");
		expect(confirmPasswordElement).toHaveValue("secret");
	});

	test("should show email error if email is invalid", async () => {
		const { emailInputElement, submitButton } = getFormElements();
		expect(screen.queryByText(/Invalid email/i)).not.toBeInTheDocument();
		await user.type(emailInputElement, "invalid");
		await user.click(submitButton);
		expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
	});

	test("should show password error if password is less than five letters", async () => {
		const { emailInputElement, submitButton, passwordInputElement } =
			getFormElements();
		expect(
			screen.queryByText(/Password must be at least 5 characters/i)
		).not.toBeInTheDocument();
		await user.type(emailInputElement, "test@test.com");
		await user.type(passwordInputElement, "abcd");
		await user.click(submitButton);

		expect(screen.getByText(/Invalid email/i)).toBeInTheDocument();
	});

	test("should show password error if passwords do not match", async () => {
		const {
			emailInputElement,
			submitButton,
			passwordInputElement,
			confirmPasswordElement,
		} = getFormElements();

		const errorMsg = /Passwords do not match/i;

		expect(screen.queryByText(errorMsg)).not.toBeInTheDocument();
		await user.type(emailInputElement, "test@test.com");
		await user.type(passwordInputElement, "secret");
		await user.type(confirmPasswordElement, "notsecret");
		await user.click(submitButton);

		expect(screen.getByText(errorMsg)).toBeInTheDocument();
	});

	test("Show no error message if all fields are valid and fields are cleared", async () => {
		const {
			emailInputElement,
			submitButton,
			passwordInputElement,
			confirmPasswordElement,
		} = getFormElements();

		await user.type(emailInputElement, "test@test.com");
		await user.type(passwordInputElement, "secret");
		await user.type(confirmPasswordElement, "secret");
		await user.click(submitButton);

		expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument();
		expect(
			screen.queryByText(/password must be at least five characters/i)
		).not.toBeInTheDocument();
		expect(
			screen.queryByText(/passwords do not match/i)
		).not.toBeInTheDocument();

		expect(emailInputElement).toHaveValue("");
		expect(passwordInputElement).toHaveValue("");
		expect(confirmPasswordElement).toHaveValue("");
	});
});
