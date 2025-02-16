import { type NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/register", "/login"];

export async function middleware(request: NextRequest) {
  // console.log("from middleware", request);
  return null;
}

export const config = {
  matcher: ["/api/login", "/api/logout", "/create-profile/:path*"],
  //use this for testing only
  // matcher: [],
};
