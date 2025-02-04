"use server";
import { eq } from "drizzle-orm";
import { db } from "~/db";
import { bandProfileTable } from "~/db/schema";

export default async function updateGenresByProfileId(
  profileId: number,
  genres: string[],
): Promise<undefined> {
  try {
    await db
      .update(bandProfileTable)
      .set({ genres })
      .where(eq(bandProfileTable.id, profileId));
  } catch (e) {
    console.error(e);
  }
}
