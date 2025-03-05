"use server";

import { db } from "~/db";
import { bandProfileTable } from "~/db/schema";
import { sql } from "drizzle-orm";
import { BandProfile } from "~/data-access/profiles/create-band-profile";

export default async function (
  searchValue: string,
): Promise<BandProfile[] | undefined> {
  try {
    const res = await db
      .select()
      .from(bandProfileTable)
      .where(
        sql`to_tsvector('english', ${bandProfileTable.bandName}) @@ to_tsquery('english', ${searchValue})`,
      );

    return res;
  } catch (err) {
    console.error(err);
  }
}
