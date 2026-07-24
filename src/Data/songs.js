import jamiCover from "../assets/Covers/jamis-lullaby.jpg";
import williamsCover from "../assets/Covers/not-another-love-song.jpg";
import robinsonCover from "../assets/Covers/mrs-robinson.jpg";

// Later we'll import the MP3s

const songs = [
  {
    id: 1,
    title: "Jami's Lullaby",
    artist: "J. Williams",
    cover: jamiCover,
    audio: "/Songs/jamis-lullaby-song.mp3",
  },
  {
    id: 2,
    title: "Not Another Love Song",
    artist: "J. Williams",
    cover: williamsCover,
    audio: "/Songs/not-another-song.mp3",
  },
  {
    id: 3,
    title: "Mrs. Robinson",
    artist: "J. Williams",
    cover: robinsonCover,
    audio: "/Songs/mrs-robinson-song.mp3",
  },
];

export default songs;
