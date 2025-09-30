"use client";

import { useActionState, useEffect } from "react";
// import { useToast } from '@/components/ui/use-toast';
import { actionFunction } from "@/utils/types";
import { toast } from "sonner";

// function Signout() {
// 	const handleLogout = () => {
// 		toast("Successfully logged out.");
// 	};

const initialState = {
	message: "",
};

function FormContainer({
	action,
	children,
}: {
	action: actionFunction;
	children: React.ReactNode;
}) {
	const [state, formAction] = useActionState(action, initialState);

	useEffect(() => {
		if (state.message) {
			toast(state.message);
		}
	}, [state]);
	return <form action={formAction}>{children}</form>;
}

export default FormContainer;
