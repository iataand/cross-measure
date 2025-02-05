import { getConnections } from "~/data-access/connections/get-connections-by-profile-id";

export default async function Connections() {
  const connections = await getConnections();

  return (
    <ul>
      {connections.map((connection) => (
        <li key={connection.id}>
          {connection.firstProfile.bandName}-{connection.secondProfile.bandName}
        </li>
      ))}
    </ul>
  );
}
