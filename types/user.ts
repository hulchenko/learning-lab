export type Lesson = {
  title: string;
  complete: boolean;
  video: string;
};

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

export type UserProfileResponse = {
  record: UserProfile;
  metadata: {
    id: string;
    private: boolean;
    createdAt: string;
    name: string;
  };
};