import "../styles/ProgressBar.css";

function ProgressBar({ currentTime, duration, audioRef }) {

  function handleSeek(e) {
    audioRef.current.currentTime = Number(e.target.value);
  }

  return (
    <div className="progress-container">

      <input
        type="range"
        min="0"
        max={duration}
        value={currentTime}
        onChange={handleSeek}
      />

      <div className="time-display">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

    </div>
  );
}


function formatTime(time) {
  if (!time) return "0:00";

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
}


export default ProgressBar;
