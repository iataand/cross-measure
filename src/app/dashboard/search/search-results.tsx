import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "~/components/ui/card";
import Link from "next/link";
import { BandProfile } from "~/data-access/profiles/create-band-profile";
import searchProfileAction from "./_actions/searchProfileAction";

type PropTypes = {
  filters: { [key: string]: string | string[] | undefined; }
}

export default async function SearchResults(props: PropTypes) {
  let profiles: BandProfile[] | undefined = [];

  if (typeof props.filters.search === "string") {
    profiles = await searchProfileAction(props.filters.search);
  }

  if (!profiles) {
    return <p className="text-center">Type something to begin searching...</p>
  }

  return (
    <ul>
      {profiles.map((profile) =>
        <li key={profile.id}>
          <Card className="m-auto mt-4 max-w-[750px] px-2">
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>
                  <Link href={`/dashboard/profile/${profile.userId}`}>
                    {profile.bandName}
                  </Link>
                </CardTitle>
              </div>
              <CardDescription>{profile.bio}</CardDescription>
            </CardHeader>
            <CardContent className="flex grid-cols-2 flex-wrap gap-2 md:grid">
              <p className="text-muted-foreground">Email</p>
              <p>{profile.email}</p>
              <p className="text-muted-foreground">Location</p>
              <p>{profile.location}</p>
              <p className="text-muted-foreground">Genres</p>
              <ul className="flex flex-wrap gap-1">
                {profile.genres?.map((genre) => (
                  <li
                    key={genre}
                    className="cursor-pointer rounded-3xl border-2 border-gray-700 px-2 py-1"
                  >
                    {genre}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center gap-3">
            </CardFooter>
          </Card>
        </li>
      )}
    </ul>
  );
}
