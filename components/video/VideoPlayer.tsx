"use client"

import { useRef, useEffect } from 'react'
import { Observer } from 'mobx-react-lite'
import { videoStore } from '@/store/VideoStore'
import Hls from 'hls.js'
import { VideoPlayerProps } from './video.types'

export default function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // Native HLS support (Safari)
            video.src = videoUrl;
            video.muted = true;
            video.autoplay = true;
            video.play();
        } else if (Hls.isSupported()) {
            // 2. Use hls.js for Chrome/Firefox
            const hls = new Hls();
            hls.loadSource(videoUrl);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                video.muted = true;
                video.autoplay = true;
                video.play();
            });
            return () => {
                hls.destroy();
            };
        }
    }, [videoUrl]);

    return (
        <div className='group relative w-full max-w-4xl overflow-hidden rounded-xl bg-black shadow-2xl'>
            {/* Custom Overlay Controls */}
            <div className='right-4 z-10 flex items-center gap-2 rounded-lg bg-black/60 px-2 py-1.5 backdrop-blur-md opacity-100'>
                <button className='flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-lg font-medium text-white transition-all hover:bg-white/25 active:scale-95'>
                    +
                </button>
                <button className='flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-lg font-medium text-white transition-all hover:bg-white/25 active:scale-95'>
                    -
                </button>
                <button className='flex items-center justify-center rounded-md bg-white/10 px-4 h-10 text-lg font-medium text-white transition-all hover:bg-white/25 active:scale-95'>
                    mute
                </button>
            </div>

            <video
                ref={videoRef}
                controls
                onTimeUpdate={(e) => videoStore.updateTime(e.currentTarget.currentTime)}
                onDurationChange={(e) => videoStore.setDuration(e.currentTarget.duration)}
                onPlay={() => videoStore.setIsPlaying(true)}
                onPause={() => videoStore.setIsPlaying(false)}
            />
            <div className='p-4 bg-white dark:bg-zinc-900'>
                <h2 className='text-xl font-semibold text-zinc-800 dark:text-zinc-100'>{title}</h2>
                <Observer>
                    {() => (
                        <div
                            className='h-2 bg-indigo-600 transition-all duration-150 mt-2'
                            style={{ width: `${videoStore.progressPercentage}%` }}
                        />
                    )}
                </Observer>
            </div>
        </div>
    )
}