"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "~/components/ui/button";
import { auth } from "~/firebase.config";

type propTypes = {
  profileId: string;
};

export default function ConnectButton(props: propTypes) {
  const [user] = useAuthState(auth);

  if (user?.uid === props.profileId) {
    return <></>;
  }

  return (
    <Button
      variant="gradient"
      size="sm"
      className="absolute right-2.5 top-2.5"
      onClick={() => {
        console.log(props.profileId);
      }}
    >
      Connect
    </Button>
  );
}
