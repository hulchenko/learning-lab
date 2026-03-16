import { videos } from "../../../data";

export async function GET() {
  return Response.json(videos);
}
