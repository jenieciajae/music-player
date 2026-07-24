import "../Styles/Playlist.css";
import songs from "../Data/songs";

function Playlist({ onSongSelect, currentSong }) {
  return (
    <div className="playlist">
      {songs.map((song) => (
        <div 
            key={song.id}
            className={`playlist-song ${
                currentSong.id === song.id ? "active" : ""
             }`}
             onClick={() => onSongSelect(song)}
        >
          <img src={song.cover} alt={song.title} />

          <div>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Playlist;