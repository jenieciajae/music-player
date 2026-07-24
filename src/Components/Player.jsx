import "./../Styles/Player.css";

import SongInfo from "./SongInfo";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import Playlist from "./Playlist";

function Player() {
  return (
    <div className="player">

      <SongInfo />

      <ProgressBar />

      <Controls />

      <Playlist />

    </div>
  );
}

export default Player;