import { makeAutoObservable } from "mobx"

class VideoStore {
    currentTime = 0;
    duration = 0;
    isPlaying = false;
    volume = 0.75;
    mute = false;

    constructor() {
        makeAutoObservable(this);
    }

    //actions
    updateTime(seconds: number) {
        this.currentTime = seconds
    }

    setDuration(seconds: number) {
        this.duration = seconds
    }

    setIsPlaying(status: boolean) {
        this.isPlaying = status
    }

    toggleMute() {
        this.mute = !this.mute;
    }

    setVolume(value: number) {
        this.volume = Math.max(0, Math.min(1, value)); // Clamp between 0 and 1
        if (this.volume > 0) this.mute = false;
    }

    get progressPercentage() {
        if (this.duration === 0) return 0;
        return (this.currentTime / this.duration) * 100;
    }
}

// Export a singleton instance
export const videoStore = new VideoStore();