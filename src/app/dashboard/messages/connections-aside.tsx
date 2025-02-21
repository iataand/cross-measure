'use client'

import { BandProfile } from "~/data-access/profiles/create-band-profile"
import { useCurrentConnectionChatStore } from "~/providers/current-connection-chat-provider"

type PropTypes = {
  connections: {
    profile: BandProfile,
    isAccepted: boolean,
    id: number
  }[]
}

export default function ConnectionsAside(props: PropTypes) {
  const { setCurrentProfileChat, currentConnection } = useCurrentConnectionChatStore((state) => state)

  return (
    <aside className="w-1/4 border">
      <ul>
        {props.connections.map((connection) =>
          <li
            key={connection.id}
            className={`p-4 border-b cursor-pointer hover:bg-gray-800 ${connection.id === currentConnection.id ? 'bg-gray-900' : ''}`}
            onClick={() => setCurrentProfileChat(connection)}
          >
            {connection.profile.bandName}
          </li>
        )}
      </ul>
    </aside>)
}
