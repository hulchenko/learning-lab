import CourseBig from "@/components/courses/course-big"
import { CourseList } from '../../types/courses'
export default async function page() {

    const resp = await fetch(`${process.env.JSON_BIN}${process.env.COURSES_BIN_ID}`, {
        headers: {
            "X-Master-Key": process.env.API_KEY as string
        }
    })

    if (!resp.ok) {
        const errorText = await resp.text();
        console.error("JSONBin Fetch Error:", resp.status, errorText);
        throw new Error(`failed to fetch bin: ${resp.status} ${errorText}`)
    }
    const responseData = await resp.json();
    const data = responseData.record as CourseList;

    return (
        <div className="mt-8">
            <>
                <h1 className="w-full mt-8 text-4xl font-bold text-center text-transform: capitalize">Star Wars Courses:</h1>
                {data.map((course) => (
                    <CourseBig key={course.courseId} course={course} />
                ))}
            </>
        </div>
    )
}