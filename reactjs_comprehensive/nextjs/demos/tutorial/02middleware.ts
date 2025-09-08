//! Middleware in Next.js is a piece of code that allows one to perform actiosn before a request is completed...and modify the response accordingly.

// import { NextResponse } from "next/server";

// //* Called before EVERY request:
// export function middleware(request: Request) {
// console.log('Hello from middleware');
// 	console.log("Hello from the middleware");

// 	return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
// 	matcher: ["/about/:path*", "/tours/:path*"],
// };
