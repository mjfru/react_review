import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import { customFetch, formatPrice } from "../utils";
import { clearCart } from "../features/cart/cartSlice";

// eslint-disable-next-line react-refresh/only-export-components
export const action =
	(store) =>
	async ({ request }) => {
		const formData = await request.formData();
		const { name, address } = Object.fromEntries(formData);
		const user = store.getState().userState.user;
		const { cartItems, orderTotal, numItemsInCart } =
			store.getState().cartState;
		const info = {
			name,
			address,
			chargeTotal: orderTotal,
			orderTotal: formatPrice(orderTotal),
			cartItems,
			numItemsInCart,
		};

		try {
			const response = await customFetch.post(
				"/orders",
				{ data: info },
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			console.log(response);
			store.dispatch(clearCart());
			return redirect("/orders");
		} catch (e) {
			console.log(e);
			if (e.response.status === 401) return redirect("/login");
			return null;
		}
	};

const CheckoutForm = () => {
	return (
		<Form method="POST" className="flex flex-col gap-y-4">
			<h4 className="font-medium text-xl capitalize">Shipping Information</h4>
			<FormInput label="first name" name="name" type="text" />
			<FormInput label="address" name="address" type="text" />
			<div className="mt-4">
				<SubmitButton text="place your order" />
			</div>
		</Form>
	);
};

export default CheckoutForm;
