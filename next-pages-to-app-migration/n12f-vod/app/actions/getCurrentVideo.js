import { baseUrl } from "../../constants";

const blankVideoBlock = {
  videoUrl: null,
  videoTitle: null,
  fact: null,
  videoId: null,
};

export default async function getCurrentVideo(id) {
  try {
    const res = await fetch(baseUrl + `/api/current-video?id=${id}`);

    if (!res.ok) {
      const errorData = await res.json();
      console.log("Video fetch failed:", errorData);
      return blankVideoBlock;
    }

    const data = await res.json();
    return {
      videoUrl: "flower.webm",
      videoTitle: data.title,
      fact: data.fact,
      videoId: data.id,
    };
  } catch (error) {
    return blankVideoBlock;
  }
}
