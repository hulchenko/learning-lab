"use client";

import { use, useCallback, useRef } from "react";
import ChapterBlock from "./ChapterBlock";
import VideoPlayer from "./VideoPlayer";
import styles from "../styles/Player.module.css";
import getCurrentVideo from "../app/actions/getCurrentVideo";

export default function PlayerLayout({ video, children }) {
  // 1. Straight forward approach: await fetched data and pass it down as props to display in client component
  // const { videoUrl, videoTitle, fact, id } = video;

  // 2. Create a promise in the parent component, to then unwrap with the "praised" use hook here (this is actually how it's suggested by the community, I could not find anything related to it in React docs):
  const { videoUrl, videoTitle, fact, id } = use(video);

  // 3. Create infinite loops by calling server action directly with the use hook i.e. use(someServerAction());
  // const { videoUrl, videoTitle, fact, id } = use(getCurrentVideo("1"));

  const videoRef = useRef(null);

  const handleChapterClick = useCallback(
    (id) => {
      const video = videoRef.current;
      if (video && video.duration) {
        const percent = (id + 1) * 0.1;
        video.currentTime = video.duration * percent;
      }
    },
    [id],
  );

  return (
    <div style={{ padding: "2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img src="/assets/logo.png" alt="Nicolas Cage Logo" style={{ height: "500px" }} />
      </div>
      <h1 style={{ textAlign: "center", color: "#fb42b2", fontSize: "2.5rem", marginBottom: "1.5rem" }}>{videoTitle}</h1>
      <div className={styles.playerContainer}>
        <div className={styles.descriptionBox}>
          <div className={styles.descriptionHeader} style={{ fontWeight: "bold", marginBottom: "1rem", color: "#fb42b2" }}>
            Video Description
          </div>
          <div>{fact}</div>
        </div>
        <div className={styles.videoBox}>
          <div className={styles.videoPlayerBorder}>
            <VideoPlayer src={videoUrl} ref={videoRef} />
          </div>
        </div>
        <div className={styles.chaptersBox}>
          <div style={{ fontWeight: "bold", marginBottom: "1rem", color: "#fb42b2", textAlign: "center" }}>Chapters</div>
          {Array.from({ length: 9 }).map((_, idx) => (
            <ChapterBlock idx={idx} onClick={handleChapterClick} key={idx} />
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}
