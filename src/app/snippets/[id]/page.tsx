import { deleteSnippet } from "@/actions";
import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
interface SnippetShowProps {
	params: { id: string };
}
const SnippetShowPage = async (props: SnippetShowProps) => {
	const snippet = await db.snippet.findFirst({
		where: { id: parseInt(props.params.id) },
	});
	if (!snippet) {
		notFound();
	}
	const deleteSnippetAction = deleteSnippet.bind(null, snippet.id);

	return (
		<div>
			<div className="flex m-4 justify-between items-center">
				<h1 className="text-xl font-bold">{snippet.title}</h1>
				<div className="flex gap-4">
					<Link
						className="p-2 border rounded"
						href={`/snippets/${props.params.id}/edit`}
					>
						Edit
					</Link>
					<form action={deleteSnippetAction}>
						<button className="p-2 border rounded">Delete</button>
					</form>
				</div>
			</div>
			<pre className="p-3 border rounded bg-gray-200 border-gray-200">
				<code>{snippet.code}</code>
			</pre>
		</div>
	);
};

export default SnippetShowPage;
export async function generateStaticParams() {
	const snippets = await db.snippet.findMany();
	return snippets.map((snippet) => ({
		id: snippet.id.toString(),
	}));
}
