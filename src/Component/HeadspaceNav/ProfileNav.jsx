import React from "react";
import "./HeadspaceNav.css";
import { MdOutlinePersonOutline } from "react-icons/md";

export default function ProfileNav() {
  return (
    <div className="profile-nav-cont">
      <MdOutlinePersonOutline size={27} />
      <p className="profile-name"> SENTHAMIL </p>
    </div>
  );
}
