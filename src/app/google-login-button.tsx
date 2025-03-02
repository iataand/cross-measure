"use client";

import { Button } from "@radix-ui/themes";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth, singInWithGoogle } from "~/firebase";
import getProfileByProfileId from "~/data-access/profiles/get-profile-by-profileId";

export default function ButtonWrapper() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  async function handleClick() {
    try {
      const userData = await singInWithGoogle();
      const idToken = await userData.user.getIdToken();
      const csrfResponse = await fetch("/api/csrf");
      const { csrfToken } = await csrfResponse.json();

      await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken, csrfToken }),
      });

      if (user) {
        await getProfileByProfileId(user.uid);
        router.push(`/dashboard/profile/${userData.user.uid}`);
        return;
      }

      router.push('/create-profile/band');
    } catch (error) {
      console.error(error);
    }
  }

  if (!user) {
    return (
      <span className="flex items-center gap-2 text-lg font-semibold" onClick={handleClick}>
        <IconBrandGoogleFilled /> Login with google
      </span>
    );
  }

  return (
    <Button
      className="flex h-10 w-full cursor-pointer gap-2 rounded-3xl bg-[#1a73e8] text-white hover:opacity-70"
      onClick={handleClick}
    >
      {user?.providerData[0]?.providerId === "google.com" && (
        <div className="flex w-full items-center justify-between px-2">
          <div className="flex items-center">
            <span>
              <Image
                src={user.photoURL!}
                alt="profile-pic"
                width={25}
                height={25}
                className="rounded-full"
              />
            </span>
            <div className="ml-2 text-start text-xs">
              <p>Continue as {user.displayName}</p>
              <p>{user.email}</p>
            </div>
          </div>
          <IconBrandGoogleFilled />
        </div>
      )}
    </Button>
  );
}
