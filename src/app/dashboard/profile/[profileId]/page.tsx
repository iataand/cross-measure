import { getProfileByProfileIdAction } from "./_actions/get-profile-by-profileId.action";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import ProfileImage from "./image-upload";
import SelectGenres from "./select-genres";
import getGenresAction from "./_actions/get-genres.action";
import { EditButton } from "./edit-button";
import { getCountries } from "~/data-access/countries/get-countries";
import ConnectButton from "./connect-button";
import getConnectionByProfilesIdAction from "./_actions/get-connection-by-profileId.action";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const profileId = (await params).profileId;
  const profile = await getProfileByProfileIdAction(profileId);
  const genres = await getGenresAction();
  const countries = await getCountries();
  const hasConnection = await getConnectionByProfilesIdAction(
    profile.userId,
    profileId,
  );

  const profileImageUrl =
    profile.profileImageUrl ?? process.env.DEFAULT_PROFILE_IMAGE_URL!;

  return (
    <div>
      <div className="m-auto mt-4 max-w-[800px] px-4">
        <Card className="relative">
          <EditButton
            currentProfileId={profileId}
            countries={countries}
            bio={profile.bio}
            bandName={profile.bandName}
            location={profile.location}
            email={profile.email}
          />
          <ConnectButton hasConnection={hasConnection} profileId={profileId} />
          <CardHeader>
            <div className="flex gap-4">
              <ProfileImage
                profileImageUrl={profileImageUrl}
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
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>
              Genres <hr className="mt-1" />
            </CardTitle>
            <CardDescription>
              Genres that best describe your music
            </CardDescription>
            <SelectGenres
              genres={genres}
              profileId={profile.id}
              selectedGenres={profile.genres ?? []}
            />
          </CardHeader>
        </Card>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>
              Bio <hr className="mt-1" />
            </CardTitle>
            <CardDescription />
            {profile.bio}
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
