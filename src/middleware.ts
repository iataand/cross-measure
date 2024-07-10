import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";
import { getProfileById } from "./data-access/profiles";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  let hasProfile = false;
  let profileSub: string | null = null;

  console.log("from middleware");

  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        profileSub = session.userSub ?? null;
        if (profileSub) {
          hasProfile = !!(await getProfileById(session.userSub));
        }

        return (
          session.tokens?.accessToken !== undefined &&
          session.tokens?.idToken !== undefined
        );
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });

  if (authenticated && hasProfile) {
    return response;
  }

  if (authenticated && !hasProfile) {
    return NextResponse.redirect(
      new URL(`/create-profile/${profileSub}`, request.url),
    );
  }

  return NextResponse.redirect(new URL("/sign-in", request.url));
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sign-in|create-profile).*)",
  ],
};
