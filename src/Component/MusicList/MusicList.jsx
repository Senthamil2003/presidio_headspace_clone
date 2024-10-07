import React, { useEffect, useState } from "react";
import "./Music.css";
import MusicCard from "../HeadspaceCards/MusicCard";

import "react-h5-audio-player/lib/styles.css";
import { getMusic } from "../../axios/axiosRequest"; // assuming this is an async function

export default function MusicList() {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const data = await getMusic(); // Await the asynchronous API call
        setMusic(data); // Set the music data into state
      } catch (error) {
        console.error("Error fetching music data:", error);
      }
    };
    fetchMusic();
  }, []);

  console.log(music);

  return (
    <div className="music-tot-cont">
      {music.length > 0 ? (
        music.map((item, index) => (
          <MusicCard
            key={index}
            songName={item.song_name}
            artistName={item.artist_name}
            imageUrl={item.image_url}
            mp3Url={item.mp3_url}
            duration={item.duration}
          />
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
}
