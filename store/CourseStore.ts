import { makeAutoObservable } from "mobx"
import { CourseList } from "@/types/courses";

class CourseStore {}

// Export a singleton instance
export const courseStore = new CourseStore();