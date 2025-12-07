"use client";
import Logo from "@/assets/images/logo.svg";
import links from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="py-4 px-8 bg-muted h-full">
			<Image src={Logo} alt="logo" className="mx-auto" />
		</aside>
	);
}

export default Sidebar;
