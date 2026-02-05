import { faAngleLeft, faAngleRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Player = ({ audioRef, setCurrentSong, currentSong, isPlaying, setIsPlaying, songInfo, setSongInfo, songs, setSongs }) => {
  const activeLibraryHandler = (nextPrevious) => {
    const newSongs = songs.map(
      (song) => {
        if (song.id === nextPrevious.id) {
          return {
            ...song,
            active: true,
          };
        } else {
          return {
            ...song,
            active: false,
          };
        }
      },
      [currentSong]
    );
    setSongs(newSongs);
  };
  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    //% is to reset when the counter reaches maximum number in array
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return; //to prevent function below from running, to ensure code works in case of match
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    //check if song is playing(StackOverflow) -> if song hasn't loaded yet, it will be undefined, then we wait until it loads up to play on click
    if (isPlaying) audioRef.current.play();
  };
  //add track animation
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`,
          }}
          className="track"
        >
          <input onChange={dragHandler} min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{getTime(songInfo.duration || 0)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon onClick={() => skipTrackHandler("skip-back")} icon={faAngleLeft} className="skip-back" size="2x" />
        <FontAwesomeIcon onClick={playSongHandler} icon={isPlaying ? faPause : faPlay} className="play" size="2x" />
        <FontAwesomeIcon onClick={() => skipTrackHandler("skip-forward")} icon={faAngleRight} className="skip-forward" size="2x" />
      </div>
    </div>
  );
};

export default Player;
