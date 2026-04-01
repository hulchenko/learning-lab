import { baseUrl } from "../../constants";

export default async function getCurrentVideo(id) {
  const res = await fetch(baseUrl + `/api/current-video?id=${id}`);

  if (!res.ok) {
    const { error } = await res.json();
    throw new Error(error);
  }

  const data = await res.json();
  return {
    videoUrl: "flower.webm",
    videoTitle: data.title,
    fact: data.fact,
    videoId: data.id,
  };
}
