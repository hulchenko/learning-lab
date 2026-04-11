import { Course } from "@/types/courses";

export async function getCourses() {
  const resp = await fetch(`${process.env.JSON_BIN}${process.env.COURSES_BIN_ID}`, {
    headers: {
      "X-Master-Key": process.env.API_KEY as string,
      "X-Access-Key": process.env.ACCESS_KEY as string,
    },
  });

  if (!resp.ok) {
    const { error } = await resp.json();
    throw new Error(`Failed to fetch bin: ${resp.status} ${error}`);
  }
  const responseData = await resp.json();
  const data = responseData.record as Course[];

  return data;
}
