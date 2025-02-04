import { Genre, getGenres } from "~/data-access/genres/get-genres";

export default async function (): Promise<Genre[] | undefined> {
  try {
    const genres = await getGenres();
    return genres;
  } catch (e) {
    console.error(e);
  }
}
