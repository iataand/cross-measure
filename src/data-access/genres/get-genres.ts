import "server-only";
import { db } from "~/db";
import { genresTable } from "~/db/schema";

export type Genre = {
  id: number;
  name: string;
};

export async function getGenres(): Promise<Genre[]> {
  const genres = await db.select().from(genresTable);

  if (!genres) {
    throw new Error("Cound not fetch genres.");
  }

  return genres;
}
