import { auth } from "firebase-admin";
import { getAuth } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
// import admin from "./firebaseAdminConfig";

export async function middleware(req: NextRequest) {
  console.log("from middleware");
  // const token = req.cookies.get("csrfToken");
  // admin.auth().;
  // console.log(token);
  // const verifiedToken = await admin.auth().verifyIdToken();

  try {
    // await getAuth().verifyIdToken(token);
    return NextResponse.next(); // Allow the request to proceed
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/create-profile/:uid*"], // Apply middleware to these routes
};
