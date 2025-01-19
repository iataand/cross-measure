import { getProfileByProfileIdAction } from "./_actions/get-profile-by-profileId.action";
import Header from "./header";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";
import ProfileImage from "./image-upload";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const profileId = (await params).profileId;
  const profile = await getProfileByProfileIdAction(parseInt(profileId));

  return (
    <div>
      <Header
        name={profile.bandName}
        imageUrl={
          "https://utfs.io/f/3oEdKbrCvD625YXqXhUekhVrK3WtJfD12ZlS9LMjszIxBTCX"
        }
      />
      <div className="px-4">
        <Card className="m-auto mt-4 max-w-[800px]">
          <CardHeader>
            <div className="flex gap-4">
              <ProfileImage
                profileImageUrl={profile.profileImageUrl}
                profileId={profile.id}
              />
              <div className="flex flex-col justify-between">
                <CardTitle>
                  {profile.bandName} <hr className="mt-1" />
                </CardTitle>
                <div className="flex grid-cols-2 flex-wrap gap-2 md:grid">
                  <div>
                    <p className="text-muted-foreground">location</p>
                    {profile.location}
                  </div>
                  <div>
                    <p className="text-muted-foreground">email</p>
                    {profile.email}
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
