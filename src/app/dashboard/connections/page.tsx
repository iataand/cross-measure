import { getConnections } from "~/data-access/connections/get-connections-by-profile-id";
import ToggleViews from "./toggle-view";

export default async function Connections() {
  const connections = await getConnections();

  return <ToggleViews connections={connections}></ToggleViews>;
}
