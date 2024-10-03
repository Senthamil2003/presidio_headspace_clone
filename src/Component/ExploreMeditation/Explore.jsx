import React from "react";
import ExploreCard from "../HeadspaceCards/ExploreCard";
import { useSelector } from "react-redux";

export default function Explore() {
  const { data, loading, error } = useSelector((state) => state.data);
  return (
    <div>
      <p className="explore-txt">Explore Meditation</p>
      {data?.Explore?.map((item, i) => {
       return <ExploreCard  data={item}/>;
      })}
    </div>
  );
}
