import { Course } from './courses.types'
import Image from 'next/image'
import Link from 'next/link'

export default function CourseBig({ course }: { course: Course }) {
    const getBgClass = (dicipline: string) => {
        if (dicipline === 'sith') return 'bg-[#FF000020]';
        if (dicipline === 'jedi') return 'bg-[#00FF0020]';
        if (dicipline === 'neutral' || dicipline === 'smuggler') return 'bg-[#FFA50020]';
        return 'bg-transparent';
    };

    return (
        <>
            <Link
                key={course.courseId}
                href={`/course/${course.courseId}`}
                className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 transition-colors"
            >
                <div className={`group w-4/5 h-[300px] rounded-xl mx-auto mb-8 flex flex-row justify-left cursor-pointer`}>
                    <Image
                        className="object-cover rounded-lg w-[533px] h-[296px] shrink-0 border-2 border-white"
                        src={course.courseImage}
                        width={533}
                        height={298}
                        alt={`${course.courseName} thumbnail`}
                    />
                    <div className="relative w-full overflow-hidden border-2 rounded-xl border-white h-[270px] mt-3">
                        <div className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 ${getBgClass(course.dicipline)}`} />
                        <div className="relative z-10">
                            <h1 className="w-full mt-8 text-4xl font-bold text-center text-transform: capitalize">{course.courseName} - {course.dicipline} Program</h1>
                            <ul className="w-full mt-8 px-24 text-lg list-disc list-outside grid grid-cols-2 gap-x-12 gap-y-4 leading-relaxed text-center text-zinc-200">
                            {course.curriculum.map((lesson, i) => (
                                <li className="text-left" key={lesson.title}>
                                    <span className="block truncate" title={lesson.title}>Lesson #{i + 1}: {lesson.title}</span>
                                </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}