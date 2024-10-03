import React from "react";
import FeaturedCard from "../HeadspaceCards/FeaturedCard";
import "./Option.css";
import { useSelector } from "react-redux";
export default function Feature() {
  const { data, loading, error } = useSelector((state) => state.data);
  
  return (
    <div className="total-feature-card-cont">
      {data?.FeatureCard?.map((item, i) => {
        return <FeaturedCard data={item} />;
      })}
    </div>
  );
}
