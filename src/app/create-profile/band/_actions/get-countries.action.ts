"use server";

import { revalidatePath } from "next/cache";
import { getCountries } from "~/data-access/countries/get-countries";
import { Country } from "~/data-access/countries/get-countries";

export async function getCountriesAction(): Promise<Country[] | undefined> {
  try {
    const countries = await getCountries();
    return countries;
  } catch (e) {
    console.error(e);
  }

  revalidatePath("/");
}
