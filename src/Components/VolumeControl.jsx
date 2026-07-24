import "../Styles/VolumeControl.css";

function VolumeControl({ audioRef }) {

  function handleVolume(e) {
    audioRef.current.volume = Number(e.target.value);
  }

  return (
    <div className="volume-control">

      <span>🔊</span>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        defaultValue="1"
        onChange={handleVolume}
      />

    </div>
  );
}

export default VolumeControl;