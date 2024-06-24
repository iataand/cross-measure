"use client";

import { Input } from "@/components/ui/input";
import { sendMessageAction } from "./actions";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";

export default function SendMessageForm({
  currentChatRoomId,
}: {
  currentChatRoomId: string;
}) {
  const [formState, formAction] = useFormState(
    sendMessageAction.bind(
      null,
      currentChatRoomId,
      "b7361082-5c82-4c0b-98f1-0ef0fb7bb895",
    ),
    { message: "", errors: undefined, fieldValues: { message: "" } },
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
