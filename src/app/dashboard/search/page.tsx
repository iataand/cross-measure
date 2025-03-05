import SearchBar from "./search-bar"
import SearchResults from "./search-results"

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const filters = await searchParams;

  return (
    <>
      <SearchBar />
      <SearchResults filters={filters} />
    </>
  )
}
