import { videos } from "../../../data";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  // This should match the home page data
  const id = searchParams.get("id");
  const videoId = parseInt(id, 10);
  const currentVideo = videos.find((v) => v.id === videoId);
  if (!currentVideo) {
    return Response.json({ error: "Video not found" }, { status: 404 });
  }
  return Response.json(currentVideo);
}
