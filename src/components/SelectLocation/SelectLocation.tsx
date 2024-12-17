"use client";

import { useState } from "react";
import { Country } from "~/utils/types";

export default function SelectLocation({
  allCountries,
}: {
  allCountries: Country[];
}) {
  const [country, setCountry] = useState<string>("");

  function handleSelectCountry(e: any) {
    setCountry(e.target.value);
  }

  return (
    <div className="mt-4">
      <label htmlFor="country-select">Select your country</label>
      <select
        id="country-select"
        className="h-10 w-full bg-black"
        onChange={handleSelectCountry}
        defaultValue={"-"}
      >
        <option value="-" />
        {allCountries.map((country) => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
