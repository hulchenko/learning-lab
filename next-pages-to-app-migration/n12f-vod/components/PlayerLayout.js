"use client";

import { useCallback, useRef } from 'react';
import ChapterBlock from './ChapterBlock';
import VideoPlayer from './VideoPlayer';
import styles from "../styles/Player.module.css";

export default function PlayerLayout({ props, children }) {
    const { videoUrl, videoTitle, fact, chapterIdx } = props;
    const videoRef = useRef(null);

    const handleChapterClick = useCallback((chapterIdx) => {
        const video = videoRef.current;
        if(video.duration){
            const percent = (chapterIdx + 1) * 0.1;
            video.currentTime = video.duration * percent;
        }
    }, [chapterIdx]);

    return (
              <div style={{ padding: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <img src="/assets/logo.png" alt="Nicolas Cage Logo" style={{ height: '500px' }} />
        </div>
        <h1 style={{ textAlign: 'center', color: '#fb42b2', fontSize: '2.5rem', marginBottom: '1.5rem' }}>{videoTitle}</h1>
        <div className={styles.playerContainer}>
          <div className={styles.descriptionBox}>
            <div className={styles.descriptionHeader} style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#fb42b2' }}>Video Description</div>
            <div>{fact}</div>
          </div>
          <div className={styles.videoBox}>
            <div className={styles.videoPlayerBorder}>
              <VideoPlayer src={videoUrl} ref={videoRef} />
            </div>
          </div>
          <div className={styles.chaptersBox}>
            <div style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#fb42b2', textAlign: 'center' }}>Chapters</div>
            {Array.from({ length: 9 }).map((_, idx) => (
              <ChapterBlock idx={idx} onClick={handleChapterClick} key={idx}/>
            ))}
          </div>
        </div>
        {children}
      </div>
    )
}