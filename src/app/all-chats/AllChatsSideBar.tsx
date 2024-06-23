import { ProfileChatRooms } from "@/API";
import Link from "next/link";

export default function AllChatsSideBar({
  chatRooms,
}: {
  chatRooms: ProfileChatRooms[];
}) {
  if (!chatRooms) {
    return <>No Chats Yet...</>;
  }

  return (
    <ul className="w-1/4">
      {chatRooms.map(({ chatRoom }) =>
        chatRoom.profiles?.items.map((profile) => (
          <Link
            key={profile?.id}
            href="/"
            className={`block h-16 cursor-pointer border p-2 hover:bg-slate-50`}
          >
            <li>{profile?.profile.bandName}</li>
          </Link>
        )),
      )}
    </ul>
  );
}
