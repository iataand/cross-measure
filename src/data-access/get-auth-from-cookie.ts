"use server";

import { cookies } from "next/headers";
import { adminAuth } from "~/firebaseAdmin";

export default async function getAuthUid(): Promise<
  { user_id: string; email: string | undefined } | undefined
> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("sessionCookie");

  if (!sessionCookie) return;

  try {
    const { user_id, email } = await adminAuth.verifySessionCookie(
      sessionCookie!.value,
    );
    return { user_id, email };
  } catch (e) {
    console.error(e);
    throw Error("Invalid session cookie");
  }
}
