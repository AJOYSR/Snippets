import { PrismaClient } from "@prisma/client";
export const db = new PrismaClient();
db.snippet.create({
	data: {
		title: "New Snippet",
		code: "const abc = () => {}",
	},
});
