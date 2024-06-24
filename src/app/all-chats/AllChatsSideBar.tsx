"use client";

import { ProfileChatRooms } from "@/API";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function AllChatsSideBar({
  chatRooms,
}: {
  chatRooms: ProfileChatRooms[];
}) {
  const { currentChatRoomId } = useParams();

  if (!chatRooms) {
    return <>No Chats Yet...</>;
  }

  return (
    <ul className="w-1/4">
      {chatRooms.map(({ chatRoom }) =>
        chatRoom.profiles?.items.map((profile) => (
          <Link
            key={profile?.id}
            href={`/all-chats/${profile?.chatRoomId}`}
            className={`block h-16 cursor-pointer border p-2 hover:bg-slate-50 ${currentChatRoomId === profile?.chatRoomId ? "bg-slate-100" : ""}`}
          >
            <li>{profile?.profile.bandName}</li>
          </Link>
        )),
      )}
    </ul>
  );
}
