export async function GET(
  request: Request,
  { params }: { params: { currentChatRoomId: string } },
) {
  // console.log(params.currentChatroomId);
  const { currentChatRoomId } = params;

  console.log(currentChatRoomId);

  return new Response("Get handler");
}
