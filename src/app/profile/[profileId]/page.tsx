import { getProfileByProfileIdAction } from "./_actions/get-profile-by-profileId.action";
import Header from "./header";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const profileId = (await params).profileId;
  const profile = await getProfileByProfileIdAction(parseInt(profileId));

  return (
    <div>
      <Header />
      Band Name: {profile.bandName}
    </div>
  );
}
