import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
interface SnippetEditProps {
	params: { id: string };
}
const EditSnippetPage = async (props: SnippetEditProps) => {
	const id = parseInt(props.params.id);
	const snippet = await db.snippet.findFirst({
		where: { id },
	});
	if (!snippet) {
		notFound();
	}
	return (
		<div>
			<SnippetEditForm snippet={snippet} />
		</div>
	);
};

export default EditSnippetPage;
