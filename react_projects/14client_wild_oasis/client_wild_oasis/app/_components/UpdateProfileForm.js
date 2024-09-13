"use client";
import { useState } from "react";
import { updateGuest } from "../_lib/actions";
import { useFormStatus } from "react-dom";

export default async function ({ guest, children }) {
	const [count, setCount] = useState();
	const { fullName, email, nationality, nationalID, countryFlag } = guest;

	return (
		<form
			action={updateGuest}
			className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900"
		>
			<div className="space-y-2">
				<label>Full name</label>
				<input
					defaultValue={fullName}
					name="fullName"
					disabled
					className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
				/>
			</div>

			<div className="space-y-2">
				<label>Email address</label>
				<input
					defaultValue={email}
					name="email"
					disabled
					className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
				/>
			</div>

			<div className="space-y-2">
				<div className="flex items-center justify-between">
					<label htmlFor="nationality">Where are you from?</label>
					<img
						src={countryFlag}
						alt="Country flag"
						className="h-5 rounded-sm"
					/>

					{children}
				</div>
			</div>

			<div className="space-y-2">
				<label htmlFor="nationalID">National ID number</label>
				<input
					defaultValue={nationalID}
					name="nationalID"
					className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
				/>
			</div>

			<div className="flex items-center justify-end gap-6">
				<Button />
			</div>
		</form>
	);
}

function Button() {
	//! This new hook must be used inside a component that is rendered INSIDE a form, not in just the form itself and must be a client component.
	const { pending } = useFormStatus();

	return (
		<button
			className="px-8 py-4 font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
			disabled={pending}
		>
			{pending ? "Updating..." : "Update profile"}
		</button>
	);
}
