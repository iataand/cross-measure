"use server";

import { serverTimestamp, setDoc, doc } from "firebase/firestore";
import { db } from "~/firebase";
import getAuthUid from "~/data-access/get-auth-from-cookie";

export default async function sendMessageAction(): Promise<void> {
  const currentUser = await getAuthUid();

  if (!currentUser) {
    throw Error("Failed to fetch user");
  }

  if (!currentUser.user_id) {
    throw Error("User is not authenticated");
  }

  try {
    const docRef = await setDoc(doc(db, "chatRooms", "3"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      senderUid: currentUser.user_id,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
