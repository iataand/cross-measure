import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";
import sendMessageAction from "./actions";
import { useRouter } from "next/router";

export default function CurrentChat() {
  // console.log(currentChatRoomId.query.currentChatRoomId);

  return (
    <main className="flex w-full flex-col justify-between border p-2">
      {/* <ChatHistory /> */}
      {/* <form action={} className="flex w-full gap-2">
        <Input name="message" className="w-full" />
        <Button type="submit">Send</Button>
      </form> */}
    </main>
  );
}
