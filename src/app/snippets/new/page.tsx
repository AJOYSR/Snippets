import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";
const createSnippet = async (formData: FormData) => {
	"use server";
	const title = formData.get("title") as string;
	const code = formData.get("code") as string;
	const snippet = await db.snippet.create({
		data: { title, code },
	});
	console.log("🚀 ~ createSnippet ~ snippet:", snippet);
	redirect("/");
};
const CreateSnippetPage = () => {
	return (
		<form action={createSnippet}>
			<h3 className=" font-bold m-3">Create a Snippet</h3>
			<div className="flex flex-col gap-4">
				<div className="flex gap-4">
					<label htmlFor="title" className="w-12">
						Title
					</label>
					<input
						type="text"
						name="title"
						id="title"
						className="border rounded p2 w-full"
					/>
				</div>
				<div className="flex gap-4">
					<label htmlFor="title" className="w-12">
						Code
					</label>
					<textarea
						name="code"
						id="code"
						className="border rounded p2 w-full"
					></textarea>
				</div>
				<button
					type="submit"
					className="bg-blue-200 hover:bg-blue-500 text-white font-bold p-2 rounded"
				>
					Create
				</button>
			</div>
		</form>
	);
};

export default CreateSnippetPage;
