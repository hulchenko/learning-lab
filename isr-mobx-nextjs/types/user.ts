export type UserCourse = {
  id: number;
  lessonsComplete: number;
};

export type UserProfile = {
  userName: string;
  firstName: string;
  lastName: string;
  avatar: string;
  id: number;
  courses: UserCourse[];
};
