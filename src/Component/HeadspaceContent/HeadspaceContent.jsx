import React, { useEffect } from "react";
import "./HeadspaceContent.css";
import HeadspaceTopItem from "./HeadspaceTopItem";
import HeadspaceOptions from "../HeadspaceOptions/HeadspaceOptions";
import Explore from "../HeadspaceCards/Explore";
import AdvertiseCard from "../HeadspaceCards/AdvertiseCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFocusData,
  fetchMeditateData,
} from "../../Redux/MyHeadspaceSlice";
export default function HeadspaceContent({ option }) {
  const { isSubscribed } = useSelector((state) => state.data);

  const dispatch = useDispatch();
  useEffect(() => {
    if (option === "meditate") {
      dispatch(fetchMeditateData());
    } else if (option === "focus") {
      dispatch(fetchFocusData());
    }
  }, [option]);

  return (
    <div className="headspace-content-container">
      <div className="headspace-content-item">
        <p className="topitem-head">Meditate</p>
        <HeadspaceTopItem />
        <HeadspaceOptions />
        {!isSubscribed ? <AdvertiseCard /> : <></>}

        <Explore />
      </div>
    </div>
  );
}
