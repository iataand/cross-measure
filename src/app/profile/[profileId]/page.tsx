import { getProfileByProfileIdAction } from "./_actions/get-profile-by-profileId.action";
import Header from "./header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import Image from "next/image";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ profileId: string }>;
}) {
  const profileId = (await params).profileId;
  const profile = await getProfileByProfileIdAction(parseInt(profileId));

  return (
    <div>
      <Header name={profile.bandName} />
      <Card className="m-auto mt-4 max-w-[800px]">
        <CardHeader>
          <div className="flex gap-4">
            {/* <Image width={100} height={100} alt="Profile image" /> */}
            <div className="h-[150px] w-[130px] border"></div>
            <div className="flex flex-col justify-between">
              <CardTitle>{profile.bandName}</CardTitle>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-muted-foreground">location</p>
                {profile.location}
                <p className="text-muted-foreground">email</p>
                {profile.email}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
}
