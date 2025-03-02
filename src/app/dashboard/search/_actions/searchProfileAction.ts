"use server"

import { db } from "~/db";
import { bandProfileTable } from "~/db/schema";
import { sql } from "drizzle-orm";

export default async function(searchValue: string): Promise<any> {
	try {
		const res = await db
			.select()
			.from(bandProfileTable)
			.where(sql`to_tsvector('english', ${bandProfileTable.bandName}) @@ to_tsquery('english', ${searchValue})`);

		return res;
	} catch (err) {
		console.error(err);
	}
}
