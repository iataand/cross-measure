"use client";

import { Button } from "@radix-ui/themes";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase-providers";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";

export default function ButtonWrapper() {
  const [user] = useAuthState(auth);

  async function handleClick() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  }

  // console.log(user);
  // return <></>;

  return (
    <Button
      className="flex h-10 w-full cursor-pointer gap-2 rounded-3xl bg-[#1a73e8] text-white hover:opacity-70"
      onClick={handleClick}
    >
      {user?.providerData[0]?.providerId === "google.com" ? (
        <div className="flex w-full items-center justify-between px-2">
          <div className="flex items-center">
            <span>
              <Image
                src={user.photoURL ?? ""}
                alt="profile-pic"
                width={25}
                height={25}
                className="rounded-full"
              />
            </span>
            <div className="ml-2 text-start text-sm">
              <p>Continue as {user.displayName}</p>
              <p>{user.email}</p>
            </div>
          </div>
          <IconBrandGoogleFilled />
        </div>
      ) : (
        <span className="flex items-center gap-2 text-lg font-semibold">
          <IconBrandGoogleFilled /> Login with google
        </span>
      )}
    </Button>
  );
}
