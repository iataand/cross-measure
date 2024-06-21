"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function AllChats({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currentChatRoomId } = useParams();
  return (
    <Card className="container flex h-[90vh] gap-2">
      <ul className="w-1/4">
        <Link
          href={`/all-chats/${10}`}
          className={`block h-16 cursor-pointer border hover:bg-slate-50 ${currentChatRoomId === 10 ? "bg-slate-100" : ""}`}
        >
          a
        </Link>
        <li>b</li>
        <li>c</li>
        <li>d</li>
      </ul>
      {children}
    </Card>
  );
}
