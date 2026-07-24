import "../Styles/SongInfo.css";

function SongInfo({ song }) {
  return (
    <div className="song-info">

      <img
        src={song.cover}
        alt={song.title}
        className="album-cover"
      />

      <h2>{song.title}</h2>

      <p>{song.artist}</p>

    </div>
  );
}

export default SongInfo;