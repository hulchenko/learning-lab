export interface Course {
    courseName: string
    courseId: string
    courseImage: string
    dicipline: string
    curriculum: Lesson[]
}

export interface Lesson {
    title: string
    complete: boolean
    video: string
}