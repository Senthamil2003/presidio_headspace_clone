import React from "react";
import HeadspaceNav from "../../Component/HeadspaceNav/HeadspaceNav";
import BottomNav from "../../Component/HeadspaceNav/BottomNav";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MyHeadspace() {
  const { music } = useSelector((state) => state.data);
  console.log(music);
  return (
    <div>
      <HeadspaceNav />
      <Outlet />
      {!music.isMusicPlayed ? (
        <BottomNav />
      ) : (
        <AudioPlayer
          className="music-player"
          autoPlay
          src={music.musicLink}
          onPlay={(e) => console.log("onPlay")}
        />
      )}
    </div>
  );
}
