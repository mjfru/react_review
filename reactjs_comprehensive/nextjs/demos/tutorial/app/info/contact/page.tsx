import Link from "next/link";

//* Nested pages are contained in another folder within the page you want to nest it in.
function Contact() {
	return (
		<div>
			<h1 className="text-7xl">Contact</h1>
			<Link href="/" className="text-xl text-blue-500 inline-block mt-8">
				Return Home
			</Link>
		</div>
	);
}

export default Contact;
