import { makeAutoObservable } from "mobx";
import { Course } from "@/types/courses";

class CourseStore {
  courses: Course[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  listCourses() {
    console.log("COURSES: ", this.courses);
  }

  getCourseById(id: number) {
    const courseId = parseCourseId(id);
    return this.courses.find((course) => course.courseId === courseId);
  }
}

function parseCourseId(id: number): string {
  return String(id).padStart(3, "0");
}

// Export a singleton instance
export const courseStore = new CourseStore();
