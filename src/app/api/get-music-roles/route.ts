import { musician_roles } from "~/utils/music-roles";

export async function GET() {
  try {
    return Response.json(musician_roles);
  } catch (error) {
    return Response.json("error");
  }
}
