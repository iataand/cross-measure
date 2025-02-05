"use client";

import { Button } from "~/components/ui/button";
import connectWithProfileAction from "./_actions/connect-with-profile.action";

type propTypes = {
  profileId: string;
  authProfileUid: string | undefined;
  hasConnection: boolean;
};

export default function ConnectButton(props: propTypes) {
  function handleConnection() {
    if (props.authProfileUid) {
      connectWithProfileAction(props.authProfileUid, props.profileId);
    }
  }

  if (props.profileId === props.authProfileUid) {
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
