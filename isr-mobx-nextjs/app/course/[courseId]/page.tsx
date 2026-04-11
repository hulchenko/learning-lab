import { getCourses } from "@/app/actions/getCourses";
import CourseDetails from "@/components/courses/course";
import { courseStore } from "@/store/CourseStore";

export const revalidate = 5; // sec

export async function generateStaticParams() {
  const courses = await getCourses();

  return courses.map((course) => ({
    courseId: course.courseId,
  }));
}

export default async function CoursePage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const id = parseInt(courseId);
  // const course = await getCourseById(id);
  const course = courseStore.getCourseById(id); // pull from mobx instead

  if (!course) {
    return <div>Course is not found!</div>;
  }

  return <CourseDetails course={course} />;
}
