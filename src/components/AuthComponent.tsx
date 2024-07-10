"use client";
import { Profile, profileTypes } from "@/API";
import { Button } from "./ui/button";
import {
  withAuthenticator,
  type WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Link from "next/link";

export function ProfileMenu({
  signOut,
  user,
  profile,
}: WithAuthenticatorProps & { profile: Profile }) {
  return (
    <>
      <Link href={`/profile/${user?.userId}`}>
        {renderProfileName(profile)}
      </Link>
      <Link href="/sign-in">
        <Button onClick={signOut}>sign out</Button>
      </Link>
    </>
  );
}

export default withAuthenticator(ProfileMenu);

function renderProfileName(profile: Profile) {
  if (profile.type === profileTypes.band) {
    return <>{profile.bandName}</>;
  }

  if (profile.type === profileTypes.musician) {
    return (
      <>
        <>{profile.firstName} </> <>{profile.lastName}</>
      </>
    );
  }
}
