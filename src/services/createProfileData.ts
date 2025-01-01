import { Country, MusicRoles } from "~/utils/types";

export async function getMusicGenres(): Promise<string[]> {
  try {
    const res = await fetch("http://localhost:3000/api/get-music-genres");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getMusicRoles(): Promise<MusicRoles> {
  try {
    const res = await fetch("http://localhost:3000/api/get-music-roles");
    return await res.json();
  } catch (error) {
    console.error(error);
    return {} as MusicRoles;
  }
}

export async function getCountries(): Promise<Country[]> {
  try {
    const res = await fetch(process.env.LOCATION_API_URL!.toString(), {
      headers: { "X-CSCAPI-KEY": process.env.LOCATION_API_KEY! },
    });
    const x = await res.json();
    return x.slice(-10);
  } catch (error) {
    console.error(error);
    return [];
  }
}
