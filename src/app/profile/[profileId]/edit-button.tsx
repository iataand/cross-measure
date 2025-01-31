"use client";

import { IconEdit } from "@tabler/icons-react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/firebase.config";

type PropTypes = {
  currentProfileId: string;
};

export function EditButton(props: PropTypes) {
  const [user] = useAuthState(auth);

  if (user?.uid === props.currentProfileId) {
    return (
      <IconEdit className="absolute left-[calc(100%-35px)] top-2 cursor-pointer" />
    );
  }

  return <></>;
}
