import { genres } from "~/utils/genres";

export async function GET() {
  try {
    return Response.json(genres);
  } catch (error) {
    return Response.json("error");
  }
}
