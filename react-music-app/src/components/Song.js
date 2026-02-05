import React, { useEffect } from "react";

const Song = ({ currentSong, isPlaying }) => {
  useEffect(() => {
    const resetAnimation = () => {
      // resets cover to its original position
      const el = document.querySelector(".rotateSong");
      if (el && el.style) {
        el.style.animation = "none";
        void el.offsetWidth;
        el.style.animation = "";
      }
    };
    resetAnimation();
  }, [currentSong]);

  return (
    <div className="song-container">
      <img alt="album-cover" className={isPlaying ? "rotateSong" : ""} src={currentSong.cover} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
