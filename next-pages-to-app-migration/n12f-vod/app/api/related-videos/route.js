import { videos } from "../../../data";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  // This should match the home page data
  const id = searchParams.get("id");
  const videoId = parseInt(id, 10) || 1;
  const relatedVideos = videos.filter(v => v.id !== videoId);
  return Response.json(relatedVideos);
}
