import { Course } from "@/types/courses";

function parseCourseId(id: number): string {
  return String(id).padStart(3, "0");
}

export async function getCourseById(courseId: number) {
  const resp = await fetch(`${process.env.JSON_BIN}${process.env.COURSES_BIN_ID}`, {
    headers: {
      "X-Master-Key": process.env.API_KEY as string,
      "X-Access-Key": process.env.ACCESS_KEY as string,
    },
  });

  if (!resp.ok) {
    const { error } = await resp.json();
    throw new Error(error);
  }

  const responseData = await resp.json();
  const data = responseData.record as Course[];

  const parsedCourseId = parseCourseId(courseId);
  const course = data.find((course) => course.courseId === parsedCourseId);
  return course;
}
