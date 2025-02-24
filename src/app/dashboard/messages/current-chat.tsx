"use client"

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import useCurrentChat from "~/hooks/text-message";

type PropTypes = {
  authUid: string
}

export default function CurrentChat(props: PropTypes) {
  const { handleSendMessage, currentConnection, currentMessage, messages, handleChangeInput } = useCurrentChat();

  if (currentConnection.profile === null) {
    return <>Select a connection from the left sidebar to start a conversation.</>
  }

  const { profile } = currentConnection;

  return (
    <main className="flex-1 flex flex-col border">
      <header className="p-4 border">
        <h2 className="text-lg font-semibold">{profile.bandName}</h2>
      </header>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, i) => (
          <div key={message.connectionId + i} className={`flex ${message.senderUid === props.authUid && 'justify-end'}`}>
            <div className="w-fit bg-gradient py-1 px-2 mb-2 rounded-xl rounded-br-none">
              {message.textMessage}
            </div>
          </div>)
        )}
      </div>
      <form action={handleSendMessage} className="p-4 border flex">
        <Input
          type="text"
          className="flex-1 p-2 border rounded-md"
          placeholder="Type a message..."
          value={currentMessage}
          onChange={handleChangeInput}
        />
        <Button
          type="submit"
          variant="gradient"
          className="ml-2 px-4 py-2 rounded"
        >
          Send
        </Button>
      </form>
    </main>
  )
}
