import React from "react";
import "./HeadspaceContent.css";
import HeadspaceTopItem from "./HeadspaceTopItem";
import { Outlet } from "react-router-dom";
import HeadspaceOptions from "../HeadspaceOptions/HeadspaceOptions";
export default function HeadspaceContent() {
  return (
    <div className="headspace-content-container">
      <div className="headspace-content-item">
        <p className="topitem-head">Meditate</p>
        <HeadspaceTopItem />
        <HeadspaceOptions />
      </div>
    </div>
  );
}
