import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { getConnections } from "~/data-access/connections/get-connections-by-profile-id";

export default async function Connections() {
  const connections = await getConnections();
  const profiles = connections.map((connection) => connection.firstProfile);

  return (
    <>
      <h1 className="mb-4 text-center text-2xl">All of your connections</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <Card className="m-auto max-w-[750px] px-2">
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>{profile.bandName}</CardTitle>
                  <Button variant="destructive">Delete connection</Button>
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
                <Button variant="default">Message</Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
