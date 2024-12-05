"use client";

import { Button } from "@radix-ui/themes";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase-providers";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { useAuthState } from "react-firebase-hooks/auth";

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

  return (
    <Button
      className="flex h-10 w-full cursor-pointer gap-2 rounded-3xl bg-[#1a73e8] text-white hover:opacity-70"
      onClick={handleClick}
    >
      <IconBrandGoogleFilled />
      {user ? (
        `Continue as ${user.email}`
      ) : (
        <span className="text-lg font-semibold">"Login with google"</span>
      )}
    </Button>
  );
}
