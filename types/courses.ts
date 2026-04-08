export type CourseList = Course[]

export type Course = {
  courseName: string;
  courseId: string;
  courseImage: string;
  dicipline: string;
  curriculum: Lesson[]
}

export type Lesson = {
  title: string;
  complete: boolean;
  video: string;
};