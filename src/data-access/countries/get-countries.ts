import "server-only";
import { db } from "~/db";
import { countriesTable } from "~/db/schema";

export type Country = {
  name: string;
  id: number;
};

export async function getCountries(): Promise<Country[]> {
  const countries = await db.select().from(countriesTable);

  if (!countries) {
    throw new Error("Cound not fetch countries.");
  }

  return countries;
}
