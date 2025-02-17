import { NextResponse } from "next/server";
import { adminAuth } from "~/firebaseAdmin";
import { cookies } from "next/headers";
import csrf from "csrf";

const tokens = new csrf();
const secret = process.env.CSRF_SECRET! || tokens.secretSync();

export async function POST(request: Request) {
  const { idToken, csrfToken } = await request.json();

  if (!idToken) {
    return NextResponse.json(
      { error: "Invalid or missing id token." },
      { status: 403 },
    );
  }

  if (!tokens.verify(secret, csrfToken)) {
    return NextResponse.json({ error: "Invalid CSRF token" }, { status: 403 });
  }

  const expiresIn = 60 * 60 * 24 * 5 * 1000;

  try {
    const sessionCookie = await adminAuth.createSessionCookie(idToken, {
      expiresIn,
    });
    const cookieStore = await cookies();
    cookieStore.set("sessionCookie", sessionCookie, {
      httpOnly: true,
      secure: true,
    });
  } catch (err) {
    console.error(err);
    return new Response("Unauthorized request.", { status: 401 });
  }

  return new Response(`idToken: ${idToken}`);
}
