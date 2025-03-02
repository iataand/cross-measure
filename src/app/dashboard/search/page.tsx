"use client"

import { useState, ChangeEvent, SyntheticEvent } from "react"
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import searchProfileAction from "./_actions/searchProfileAction";
import { BandProfile } from "~/data-access/profiles/create-band-profile";

export default function Page() {
  const [searchValue, setSearchValue] = useState("");
  const [profiles, setProfiles] = useState<BandProfile[]>([]);

  function handleChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const profiles = await searchProfileAction(searchValue);
    setProfiles(profiles);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input value={searchValue} onChange={handleChangeSearch} />
        <Button type="submit">Search</Button>
      </form>
      <ul>
        {profiles.map((profile) =>
          <li key={profile.id}>
            {profile.bandName}
          </li>
        )}
      </ul>
    </>
  )
}
