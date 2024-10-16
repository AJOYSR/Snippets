import { db } from "@/db";
import Link from "next/link";
import React from "react";
const Home = async () => {
	const snippets = await db.snippet.findMany();
	const renderedSnippets = snippets.map((snippet) => {
		return (
			<Link
				key={snippet.id}
				className="flex justify-between items-center p-2 border rounded"
				href={`/snippets/${snippet.id}`}
			>
				<h2>{snippet.title}</h2>
			</Link>
		);
	});
	return (
		<div>
			<div className="flex justify-between items-center m-2">
				<h1 className="text-3xl font-bold ">Snippets</h1>
				<Link href="/snippets/new">
					<button className="border p-2 rounded">Create New</button>
				</Link>
			</div>
			<div className="flex gap-2 flex-col">{renderedSnippets}</div>
		</div>
	);
};

export default Home;
