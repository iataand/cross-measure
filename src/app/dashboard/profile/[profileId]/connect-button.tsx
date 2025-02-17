"use client";

import { Button } from "~/components/ui/button";
import connectWithProfileAction from "./_actions/connect-with-profile.action";

type propTypes = {
  profileId: string;
  authProfileUid: string | undefined;
  connection: { isAccepted: boolean } | undefined;
};

export default function ConnectButton(props: propTypes) {
  function handleConnection() {
    connectWithProfileAction(props.profileId);
  }

  if (props.profileId === props.authProfileUid) {
    return <></>;
  }

  if (props.connection && !props.connection.isAccepted) {
    return (
      <Button
        data-cy="connect"
        disabled={true}
        variant="gradient"
        size="sm"
        className="absolute right-2.5 top-2.5"
        onClick={handleConnection}
      >
        Connection pending
      </Button>
    );
  }

  if (props.connection && props.connection.isAccepted) {
    return (
      <Button
        data-cy="connect"
        disabled={props.connection?.isAccepted}
        variant="gradient"
        size="sm"
        className="absolute right-2.5 top-2.5"
      >
        You are connected
      </Button>
    );
  }

  return (
    <Button
      data-cy="connect"
      disabled={props.connection?.isAccepted}
      variant="gradient"
      size="sm"
      className="absolute right-2.5 top-2.5"
      onClick={handleConnection}
    >
      Connect
    </Button>
  );
}
