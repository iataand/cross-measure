import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import sendMessageAction from "./actions";
import ChatHistory from "./ChatHistory";

export default async function CurrentChat({
  params,
}: {
  params: { currentChatRoomId: string };
}) {
  const { currentChatRoomId } = params;

  return (
    <main className="flex w-full flex-col justify-between border p-2">
      <ChatHistory currentChatRoomId={currentChatRoomId} />
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
    </main>
  );
}
