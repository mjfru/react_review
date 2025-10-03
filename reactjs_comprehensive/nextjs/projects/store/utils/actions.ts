"use server";

import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { productSchema } from "./schema";

const getAuthUser = async () => {
	const user = await currentUser();
	if (!user) redirect("/");
	return user;
};

const renderError = (
	error: unknown
): {
	message: string;
} => {
	console.log(error);
	return {
		message: error instanceof Error ? error.message : "An error has occured.",
	};
};

export const fetchFeaturedProducts = async () => {
	const products = await db.product.findMany({
		where: {
			featured: true,
		},
		// select: {
		// 	name: true,
		// },
	});
	return products;
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
	return db.product.findMany({
		where: {
			OR: [
				{ name: { contains: search, mode: "insensitive" } },
				{ company: { contains: search, mode: "insensitive" } },
			],
		},
		orderBy: {
			createdAt: "desc",
		},
	});
};

export const fetchSingleProduct = async (productId: string) => {
	const product = await db.product.findUnique({
		where: {
			id: productId,
		},
	});
	if (!product) redirect("/products");
	return product;
};

export const createProductAction = async (
	prevState: unknown,
	formData: FormData
): Promise<{ message: string }> => {
	const user = await getAuthUser();

	try {
		const rawData = Object.fromEntries(formData);
    const validatedFields = productSchema.parse(rawData);
		
		return { message: "Product created!" };
	} catch (error) {
		return renderError(error);
	}
};
