import React from "react";
import "./Navbar.css";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="nav_tot_cont">
      <Logo />
      <div className="nav-items-tot-cont">
        <div className="nav-item">
          <p className="nav-item-txt">Articles & Resources</p>
          <p className="nav-item-txt"> Meditation</p>
          <p className="nav-item-txt">Sleep</p>
          <p className="nav-item-txt">Mindfulness</p>
          <p className="nav-item-txt">Mental Health </p>
          <p className="nav-item-txt">Plans</p>
        </div>
        <div className="nav-item">
          <p className="nav-item-txt">For Business</p>
          <p className="nav-item-txt">About</p>
          <p className="nav-item-txt">Help</p>
          <p className="nav-item-txt">My Heaspace</p>
        </div>
        <div className="nav-item">
          <button className="nav-button">Try For Free</button>
        </div>
      </div>
    </div>
  );
}
