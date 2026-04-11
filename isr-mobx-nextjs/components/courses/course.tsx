import { Course } from "@/types/courses";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";

export default function CourseDetails({ course }: { course: Course }) {
  return (
    <>
      <div className={`group w-4/5 h-[300px] rounded-xl mx-auto mb-8 flex flex-row justify-left cursor-pointer`}>
        <Image
          className="object-cover rounded-lg w-[533px] h-[296px] shrink-0 border-2 border-white"
          src={course.courseImage}
          width={533}
          height={298}
          alt={`${course.courseName} thumbnail`}
        />
        <div className="relative w-full overflow-hidden border-2 rounded-xl border-white h-[270px] mt-3">
          <div className="relative z-10">
            <h1 className="w-full mt-8 text-4xl font-bold text-center text-transform: capitalize">
              {course.courseName} - {course.dicipline} Program
            </h1>
            <ul className="w-full mt-8 px-24 text-lg list-disc list-outside grid grid-cols-2 gap-x-12 gap-y-4 leading-relaxed text-center text-zinc-200">
              {course.curriculum.map((lesson, i) => (
                <li className="text-left" key={lesson.title}>
                  <span className="block truncate" title={lesson.title}>
                    Lesson #{i + 1}: {lesson.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
