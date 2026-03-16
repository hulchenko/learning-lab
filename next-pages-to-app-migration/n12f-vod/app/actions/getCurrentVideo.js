import { baseUrl } from "../../constants";

export default async function getCurrentVideo(id) {
  const res = await fetch(baseUrl + `/api/current-video?id=${id}`);
  const data = await res.json();
  return {
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    videoTitle: data.title,
    fact: data.fact,
    videoId: data.id,
  };
}