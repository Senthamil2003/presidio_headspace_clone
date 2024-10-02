import React from "react";
import "./Headspaceoption.css";
import FeaturedCard from "./FeaturedCard";
import AdvertiseCard from "./AdvertiseCard";
import HeadspaceExplore from "./HeadspaceExplore";

export default function HeadspaceOptions() {
  return (
    <div className="total-option-cont">
      <div className="headspace-option-cont">
        <div className="headspace-option ">Recent</div>
        <div className="headspace-option option-active">Featured</div>
      </div>
      <FeaturedCard />
      <AdvertiseCard />
      <HeadspaceExplore />
    </div>
  );
}
