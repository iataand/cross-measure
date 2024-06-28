"use client";
import { useSession } from "next-auth/react";

export default function Header() {
  const session = useSession();

  return (
    <div className="h-12 border bg-slate-50">
      {session.status === "authenticated" ? (
        <>your profile here</>
      ) : (
        <>Please login</>
      )}
    </div>
  );
}
