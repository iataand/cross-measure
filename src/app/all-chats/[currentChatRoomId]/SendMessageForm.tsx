import { Input } from "@/components/ui/input";
import { sendMessageAction } from "./actions";
import { Button } from "@/components/ui/button";

export default function SendMessageForm({
  currentChatRoomId,
}: {
  currentChatRoomId: string;
}) {
  return (
    <form
      action={sendMessageAction.bind(
        null,
        currentChatRoomId,
        "b7361082-5c82-4c0b-98f1-0ef0fb7bb895",
      )}
      className="flex w-full gap-2"
    >
      <Input name="message" className="w-full" />
      <Button type="submit">Send</Button>
    </form>
  );
}
