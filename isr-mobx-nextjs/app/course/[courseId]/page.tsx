import { getCourseById } from "@/app/actions/getCourseById";
import { getCourses } from "@/app/actions/getCourses";
import CourseDetails from "@/components/courses/course";
import VideoPlayer from "@/components/video/VideoPlayer";
import { userStore } from "@/store/UserStore";

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
  const course = await getCourseById(id);

  if (!course) {
    return <div>Course is not found!</div>;
  }

  return <CourseDetails course={course} />;
}
