import { NextApiRequest } from "next";

export async function GET(request: NextApiRequest) {
  console.log(request.cookies, "cookies");
}
