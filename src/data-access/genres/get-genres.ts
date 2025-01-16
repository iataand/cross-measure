import "server-only";
import { db } from "~/db";
import { genresTable } from "~/db/schema";
import { Genre } from "~/utils/types";

export async function getGenres(): Promise<Genre[] | undefined> {
  const genres = await db.select().from(genresTable);

  return genres;
}
