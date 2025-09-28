import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/utils/links";
import UserIcon from "./UserIcon";
import { SignInButton, SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import Signout from "./Signout";
import { auth } from "@clerk/nextjs/server";
// import { SignedIn, SignedOut, SignUpButton } from "@clerk/clerk-react";

async function LinksDropdown() {
	const { userId } = await auth();
	const isAdmin = userId === process.env.ADMIN_USER_ID;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="flex gap-4 max-w-[100px]">
					<LuAlignLeft className="w-6 h-6" />
					<UserIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40" align="start" sideOffset={10}>
				<SignedOut>
					<DropdownMenuItem>
						<SignInButton mode="modal">
							<button className="w-full text-left">Login</button>
						</SignInButton>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<SignUpButton>
							<button className="w-full text-left">Sign Up</button>
						</SignUpButton>
					</DropdownMenuItem>
				</SignedOut>

				<SignedIn>
					{links.map((link) => {
            // Restricting access to the dashboard:
						if (link.label === "dashboard" && !isAdmin) return null;

						return (
							<DropdownMenuItem key={link.href}>
								<Link href={link.href} className="capitalize w-full">
									{link.label}
								</Link>
							</DropdownMenuItem>
						);
					})}
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<Signout />
					</DropdownMenuItem>
				</SignedIn>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default LinksDropdown;
