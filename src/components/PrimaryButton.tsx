"use client";
import { Button } from "@radix-ui/themes";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase-providers";

export default function PrimaryButton(props: {
  text: string;
  style?: string;
  onClick?: () => void;
}) {
  const [user] = useAuthState(auth);

  function signIn() {
    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    };

    signInWithGoogle();
  }

  return (
    <Button
      className={`${props.style ?? ""} cursor-pointer rounded-3xl bg-gradient-to-r from-red-500 to-gamboge-500 text-lg`}
      onClick={signIn}
    >
      {props.text}
    </Button>
  );
}
