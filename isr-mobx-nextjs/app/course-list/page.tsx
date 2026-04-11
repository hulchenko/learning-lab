import { Suspense } from "react";

import CourseBig from "@/components/courses/course-big";
import CustomLoader from "@/components/customLoader";

import { getCourses } from "@/app/actions/getCourses";

export const revalidate = 5;

export default async function CourseList() {
  const data = getCourses();
  return (
    <Suspense fallback={<CustomLoader />}>
      <div className="mt-8">
        <>
          <h1 className="w-full mt-8 text-4xl font-bold text-center text-transform: capitalize">Star Wars Courses:</h1>
          <CourseBig dataPromise={data} />
        </>
      </div>
    </Suspense>
  );
}
