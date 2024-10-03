import React from "react";

export default function ExploreCard({data}) {
  return (
    <div className="explore-card-tot-cont">
      <div className="explore-card-cont">
        <div className="explore-card-txt-cont">
          <p className="explore-card-head">{data.title}</p>
          <p className="explore-card-txt">
            {data.description}
          </p>
        </div>
        <div className="explore-card-img-cont">
          <img
            className="explore-card-img"
            src={data.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
