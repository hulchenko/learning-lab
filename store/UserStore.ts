import { makeAutoObservable } from "mobx"
import { UserCourse } from "@/types/user";



class UserStore {
    userName = '';
    firstName = '';
    lastName = '';
    id = 1111111111;
    courses = [] as UserCourse[];
    avatar = '';

    constructor() {
        makeAutoObservable(this);
    }

    //actions
    // completeLesson(course: number) {
    //     userStore.courses[courseId].complete = true
    // }
}

// Export a singleton instance
export const userStore = new UserStore();