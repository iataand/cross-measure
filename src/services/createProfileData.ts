import { Country } from "~/utils/types";

export async function getMusicGenres(): Promise<string[]> {
  try {
    const res = await fetch("http://localhost:3000/api/get-music-genres");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getMusicRoles(): Promise<string[]> {
  try {
    const res = await fetch("http://localhost:3000/api/get-music-roles");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getCountries(): Promise<Country[]> {
  try {
    const res = await fetch(process.env.LOCATION_API_URL!.toString(), {
      headers: { "X-CSCAPI-KEY": process.env.LOCATION_API_KEY! },
    });
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
