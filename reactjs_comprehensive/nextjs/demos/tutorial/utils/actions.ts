"use server";

import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

type User = {
	id: string;
	firstName: string;
	lastName: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createUser = async (prevState: any, formData: FormData) => {
	"use server";
	console.log(prevState);

	console.log("Creating user...");
	const firstName = formData.get("firstName") as string;
	const lastName = formData.get("lastName") as string;
	const newUser: User = { firstName, lastName, id: Date.now().toString() };
	// Alternate method for both input data:
	// const rawData = Object.fromEntries(formData);
	// console.log(rawData);

	try {
		await saveUser(newUser);
		revalidatePath("/actions");
		return "user created successfully!";
	} catch (e) {
		console.log(e);
		return "failed to create a new user...";
	}
	// redirect("/");
	// console.log(`${firstName} ${lastName}`);
	// revalidatePath("/actions");
	// redirect("/");
};

export const fetchUsers = async (): Promise<User[]> => {
	const result = await readFile("users.json", { encoding: "utf8" });
	const users = result ? JSON.parse(result) : [];
	return users;
};

const saveUser = async (user: User) => {
	const users = await fetchUsers();
	users.push(user);
	await writeFile("users.json", JSON.stringify(users));
};

export const deleteUser = async (formData: FormData) => {
	const id = formData.get("id") as string;
	const users = await fetchUsers();
	const updatedUsers = users.filter((user) => user.id !== id);
	await writeFile("users.json", JSON.stringify(updatedUsers));
  revalidatePath('/actions');
};

export const removeUser = async (formData: FormData) => {};
