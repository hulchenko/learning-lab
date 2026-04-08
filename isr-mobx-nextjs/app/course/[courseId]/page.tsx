import VideoPlayer from "@/components/video/VideoPlayer";
import { userStore } from "@/store/UserStore";

export default async function CoursePage(props: { params: Promise<{ courseId: string }> }) {
    const { courseId } = await props.params;

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-4xl font-bold mb-4">Lesson for user: {userStore.userName}</h1>
            <VideoPlayer title="this is a test" videoUrl="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
        </div>
    )
}