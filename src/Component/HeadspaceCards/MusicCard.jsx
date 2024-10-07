import React, { useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setMusic } from "../../Redux/MyHeadspaceSlice";

export default function MusicCard({
  songName,
  artistName,
  imageUrl,
  mp3Url,
  duration,
}) {
  const dispatch = useDispatch();
  function PlayMusic() {
    dispatch(
      setMusic({
        isMusicPlayed: true,
        musicLink: mp3Url,
      })
    );
  }
  useEffect(() => {
    return () => {
      dispatch(
        setMusic({
          isMusicPlayed: false,
          musicLink: "",
        })
      );
    };
  }, [dispatch]);
  return (
    <div className="music-card-cont" onClick={PlayMusic}>
      <div className="music-img-cont">
        <img className="music-img" src={imageUrl} alt="img" />
      </div>
      <div className="music-txt-cont">
        <div className="music-txt-inner">
          <p className="music-title">{songName}</p>
          <p className="music-band">{artistName}</p>
        </div>
      </div>
      <div className="music-like-cont">
        <p className="duration">{duration}</p>
        <CiHeart size={25} className="heart" />
      </div>
    </div>
  );
}
