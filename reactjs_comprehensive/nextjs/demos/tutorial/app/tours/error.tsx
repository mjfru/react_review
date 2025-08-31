"use client";

function error({ error }: { error: Error }) {
	console.log(error);
	return <div>An error has occured...</div>;
}

export default error;
