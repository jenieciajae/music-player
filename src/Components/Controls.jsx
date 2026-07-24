import "../styles/Control.css";

function Controls({ 
  isPlaying, 
  setIsPlaying, 
  audioRef,
  handleNext,
  handlePrevious
}) {

  function handlePlay() {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  return (
    <div className="controls">

  <button onClick={handlePrevious}>
    ⏮
  </button>

  <button 
    className="play-button"
    onClick={handlePlay}
  >
    {isPlaying ? "⏸" : "▶"}
  </button>

  <button onClick={handleNext}>
    ⏭
  </button>

</div>
  );
}

export default Controls;
