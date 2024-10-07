import React, { useState } from "react";
import "./Headspaceoption.css";
import Feature from "../HeadspaceOptionContent/Feature";
import Recent from "../HeadspaceOptionContent/Recent";

export default function HeadspaceOptions() {
  const [option, setOption] = useState("featured");
  return (
    <div className="total-option-cont">
      <div className="headspace-option-cont">
        <div
          className={`headspace-option ${
            option === "recent" ? "option-active" : ""
          }`}
          onClick={() => setOption("recent")}
        >
          Recent
        </div>
        <div
          className={`headspace-option ${
            option === "featured" ? "option-active" : ""
          }`}
          onClick={() => setOption("featured")}
        >
          Featured
        </div>
      </div>

      {option === "featured" ? <Feature /> : <Recent />}
    </div>
  );
}
