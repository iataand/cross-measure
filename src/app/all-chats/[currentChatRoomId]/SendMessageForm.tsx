"use client";

import { Input } from "@/components/ui/input";
import { sendMessageAction } from "./actions";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { useCurrentProfileId } from "@/custom-hooks.ts";

const defaultFormValues = {
  message: "",
  errors: undefined,
  fieldValues: { message: "" },
};

export default function SendMessageForm({
  currentChatRoomId,
}: {
  currentChatRoomId: string;
}) {
  const profileId = useCurrentProfileId();
  const [formState, formAction] = useFormState(
    sendMessageAction.bind(null, currentChatRoomId, profileId),
    defaultFormValues,
  );

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.message === "success") {
      formRef.current?.reset();
    }
  }, [formState]);

  return (
    <form action={formAction} className="flex w-full gap-2" ref={formRef}>
      <Input name="message" className="w-full" />
      <Button type="submit">Send</Button>
    </form>
  );
}
