import { userStore } from "@/store/UserStore";
import { UserProfileResponse } from "@/types/user";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  const resp = await fetch(`${process.env.JSON_BIN}${process.env.USERS_BIN_ID}`, {
    headers: {
      "X-Master-Key": process.env.API_KEY as string
    }
  })

  if (!resp.ok) {
    const errorText = await resp.text();
    console.error("JSONBin Fetch Error:", resp.status, errorText);
    throw new Error(`failed to fetch bin: ${resp.status} ${errorText}`)
  }
  const data = await resp.json() as UserProfileResponse;
  const userProfile = data.record;

  userStore.firstName = userProfile.firstName;
  userStore.lastName = userProfile.lastName
  userStore.courses = userProfile.courses
  userStore.id = userProfile.id
  userStore.avatar = userProfile.avatar
  userStore.userName = userProfile.userName

  return (
    <div className="flex flex-col flex-1 items-center justify-top p-8 font-sans dark:bg-black min-h-screen text-zinc-900 dark:text-zinc-100">
      <div className="flex flex-row items-center">
        <h1 className="text-4xl font-bold">Hello, {userStore.firstName} {userStore.lastName}!</h1>
        <Image
          className="pl-8 pb-0"
          src={userStore.avatar}
          width={125}
          height={125}
          alt="Picture of the author"
        />
      </div>
      <h1 className="mt-[-8] mb-8 mr-[125] text-2xl font-semibold">({userStore.userName})</h1>
      <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>
        <div className="flex flex-col gap-3">
          {userStore.courses.map((course) => (
            <Link
              key={course.id}
              href={`/course/${course.id}`}
              className="px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              Continue Course ID: {course.id} ({course.lessonsComplete} lessons complete)
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
