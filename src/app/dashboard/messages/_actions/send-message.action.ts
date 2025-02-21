"use server";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "~/firebase";
import getAuthUid from "~/data-access/get-auth-from-cookie";

export default async function sendMessageAction(
  textMessage: string,
  connectionId: number,
): Promise<void> {
  const currentUser = await getAuthUid();

  if (!currentUser) {
    throw Error("Failed to fetch user");
  }

  if (!currentUser.user_id) {
    throw Error("User is not authenticated");
  }

  try {
    const chatRoomRef = collection(
      db,
      "chatRooms",
      connectionId.toString(),
      "messages",
    );

    const docRef = await addDoc(chatRoomRef, {
      textMessage,
      connectionId: connectionId.toString(),
      senderUid: currentUser.user_id,
      timestamp: serverTimestamp(),
    });

    //TODO: return docref and add loading on message send
    console.log(docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
