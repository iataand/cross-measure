"use client"

import { useState, ChangeEvent, SyntheticEvent } from "react"
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search")
  const router = useRouter();
  const pathname = usePathname();
  const [searchValue, setSearchValue] = useState(search || "");

  function handleChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    router.push(`${pathname}?search=${searchValue}`);
  }

  return (
    <div className="max-w-[600px] m-auto">
      <h1 className="text-lg mt-2 text-center">Search for band name</h1>
      <form onSubmit={handleSubmit} className=" mt-3 flex gap-2">
        <Input value={searchValue} onChange={handleChangeSearch} />
        <Button type="submit">Search</Button>
      </form>
    </div>
  )
}
