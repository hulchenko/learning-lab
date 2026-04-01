import { baseUrl } from "../../constants";

export default async function getRelatedVideos(id) {
  const res = await fetch(baseUrl + `/api/related-videos?id=${id}`);

  if (!res.ok) {
    const { error } = await res.json();
    throw new Error(error);
  }

  const data = await new Promise(
    (r) =>
      setTimeout(() => {
        r(res.json());
      }, 2000), // for testing
  );
  return data;
}
