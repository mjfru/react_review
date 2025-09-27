"use client";

import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { toast } from "sonner";

function Signout() {
	const handleLogout = () => {
		toast("Successfully logged out.");
	};

	return (
		<SignOutButton>
			<Link href="/" className="w-full text-left" onClick={handleLogout}>
				Logout
			</Link>
		</SignOutButton>
	);
}

export default Signout;
