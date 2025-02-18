"use client";

import Connections from "./connections"
import { useState } from "react";
import { BandProfile } from "~/data-access/profiles/create-band-profile";
import PendingConnections from "./pending-connections";

type PropTypes = {
  connections: { profile: BandProfile; id: number; isAccepted: boolean }[];
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
        <Connections connections={props.connections.filter((connection) => connection.isAccepted)} />
      )}

      {view === "pending" && (
        <PendingConnections connections={props.connections.filter((connection) => !connection.isAccepted)} />
      )}
    </>
  );
}
