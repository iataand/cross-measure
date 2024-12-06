"use client";

import { Button } from "@radix-ui/themes";
import { IconBrandMeta } from "@tabler/icons-react";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase-providers";
import Image from "next/image";

export default function MetaLoginButton() {
  const [user] = useAuthState(auth);

  async function handleClick() {
    const provider = new FacebookAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Button
      className="onh flex h-10 w-full cursor-pointer gap-2 rounded-3xl border border-solid border-gray-100 bg-transparent text-lg font-semibold text-white hover:opacity-70"
      onClick={handleClick}
    >
      {user?.providerData[0]?.providerId === "facebook.com" ? (
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
          <IconBrandMeta />
        </div>
      ) : (
        <span className="flex items-center gap-2 text-lg font-semibold">
          <IconBrandMeta /> Login with Facebook
        </span>
      )}
    </Button>
  );
}
