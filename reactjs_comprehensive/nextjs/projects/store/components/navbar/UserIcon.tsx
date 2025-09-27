/* eslint-disable @next/next/no-img-element */
import { currentUser } from "@clerk/nextjs/server";
import { LuUser } from "react-icons/lu";

async function UserIcon() {
	// const { userId } = auth();

	const user = await currentUser();

	const profileImage = user?.imageUrl;

	if (profileImage) {
		return (
			<img
				src={profileImage}
				alt="User Image"
				className="w-6 h-6 rounded-full object-cover"
			/>
		);
	}

	return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;
