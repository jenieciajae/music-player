import { useState, useRef, useEffect } from "react";
import songs from "./data/songs";
import SongInfo from "./Components/SongInfo";
import Playlist from "./Components/Playlist";
import Controls from "./Components/Controls";
import ProgressBar from "./Components/ProgressBar";
import VolumeControl from "./Components/VolumeControl";
import "./styles/Player.css";

function App() {

  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setIsPlaying(false);

  }, [currentSong]);


  function handleNext() {
    const currentIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

    const nextSong = songs[(currentIndex + 1) % songs.length];

    setCurrentSong(nextSong);
  }


  function handlePrevious() {
    const currentIndex = songs.findIndex(
      (song) => song.id === currentSong.id
    );

    const previousSong =
      songs[(currentIndex - 1 + songs.length) % songs.length];

    setCurrentSong(previousSong);
  }


  return (
    <div className="music-player">

      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={() =>
          setCurrentTime(audioRef.current.currentTime)
        }
        onLoadedMetadata={() =>
          setDuration(audioRef.current.duration)
         }
      />

      <SongInfo song={currentSong} />

      <ProgressBar 
        currentTime={currentTime}
        duration={duration}
        audioRef={audioRef}
      />

      <Controls 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />

      <VolumeControl audioRef={audioRef} />

      <Playlist 
        onSongSelect={setCurrentSong}
        currentSong={currentSong}
      />

    </div>
  );
}

export default App;