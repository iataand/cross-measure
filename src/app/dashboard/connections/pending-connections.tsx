import { BandProfile } from "~/data-access/profiles/create-band-profile";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { acceptConnectionAction } from "./_actions/accept-connection.action";
import { Button } from "~/components/ui/button";
import deleteConnectionAction from "./_actions/delete-connection.action";

type PropTypes = {
  connections: { profile: BandProfile; id: number }[];
}

export default function PendingConnections(props: PropTypes) {
  return (
    <>
      <h1 className="mb-4 text-center text-2xl">Pending connections</h1>
      <ul>
        {props.connections.length === 0 && (
          <p className="text-center">You don't have any pending connections yet.</p>
        )}
        {props.connections?.map((connection) => (
          <li key={connection.profile.userId}>
            <Card className="m-auto mt-4 max-w-[750px] px-2">
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>{connection.profile.bandName}</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="default"
                      onClick={() => acceptConnectionAction(connection.id)}>
                      Accept
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => deleteConnectionAction(connection.id)}>
                      Decline
                    </Button>
                  </div>
                </div>
                <CardDescription>{connection.profile.bio}</CardDescription>
              </CardHeader>
              <CardContent className="flex grid-cols-2 flex-wrap gap-2 md:grid">
                <p className="text-muted-foreground">Email</p>
                <p>{connection.profile.email}</p>
                <p className="text-muted-foreground">Location</p>
                <p>{connection.profile.location}</p>
                <p className="text-muted-foreground">Genres</p>
                <ul className="flex flex-wrap gap-1">
                  {connection.profile.genres?.map((genre) => (
                    <li
                      key={genre}
                      className="cursor-pointer rounded-3xl border-2 border-gray-700 px-2 py-1"
                    >
                      {genre}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </>);
}
