"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { BandProfile } from "~/data-access/profiles/create-band-profile";

type PropTypes = {
  connections: { profile: BandProfile; id: number }[];
};

export default function ToggleViews(props: PropTypes) {
  const [view, setView] = useState<"connections" | "pending">("connections");

  return (
    <>
      <div className="mb-6 flex justify-center gap-12">
        <div
          className={`cursor-pointer ${view === "connections" && "border-b-4"} border-gamboge-500`}
          onClick={() => setView("connections")}
        >
          Connections
        </div>
        <div
          className={`cursor-pointer ${view === "pending" && "border-b-4"} border-gamboge-500`}
          onClick={() => setView("pending")}
        >
          Pending
        </div>
      </div>
      {view === "connections" && (
        <>
          <h1 className="mb-4 text-center text-2xl">All of your connections</h1>
          <ul>
            {props.connections.length === 0 && (
              <p className="text-center">You don't have any connections yet.</p>
            )}
            {props.connections?.map((connection) => (
              <li key={connection.profile.userId}>
                <Card className="m-auto mt-4 max-w-[750px] px-2">
                  <CardHeader>
                    <div className="flex justify-between">
                      <CardTitle>{connection.profile.bandName}</CardTitle>
                      <Button variant="destructive">Delete connection</Button>
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
                  <CardFooter className="flex justify-center gap-3">
                    <Button variant="default">Message</Button>
                  </CardFooter>
                </Card>
              </li>
            ))}
          </ul>
        </>
      )}

      {view === "pending" && (
        <div className="text-center text-2xl">
          You don't have any pending connections.
        </div>
      )}
    </>
  );
}
