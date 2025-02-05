"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "~/components/ui/button";
import { auth } from "~/firebase.config";
import connectWithProfileAction from "./_actions/connect-with-profile.action";

type propTypes = {
  profileId: string;
  hasConnection: boolean;
};

export default function ConnectButton(props: propTypes) {
  const [user] = useAuthState(auth);

  function handleConnection() {
    if (user) {
      connectWithProfileAction(user.uid, props.profileId);
    }
  }

  if (!user || user.uid === props.profileId) {
    return null;
  }

  return (
    <Button
      disabled={props.hasConnection}
      variant="gradient"
      size="sm"
      className="absolute right-2.5 top-2.5"
      onClick={handleConnection}
    >
      {props.hasConnection ? "Sent" : "Connect"}
    </Button>
  );
}
