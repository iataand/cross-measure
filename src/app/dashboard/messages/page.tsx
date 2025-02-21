
import { getConnections } from "~/data-access/connections/get-connections-by-profile-id";
import ConnectionsAside from "./connections-aside";
import CurrentChat from "./current-chat";

export default async function MessagesPage() {
  const connections = await getConnections();

  return (
    <div className="flex h-[calc(100vh-80px)] m-auto max-w-[1024px]">
      <ConnectionsAside connections={connections} />
      <CurrentChat />
    </div >
  );
}
