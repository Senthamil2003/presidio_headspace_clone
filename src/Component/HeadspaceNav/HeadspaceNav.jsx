import React from "react";
import { LuSearch } from "react-icons/lu";
import "./HeadspaceNav.css"; // Import the external CSS file
import Logo from "../Navbar/Logo";
import ProfileNav from "./ProfileNav";


export default function HeadspaceNav() {
  return (
    <div className="headspaceNav-container">
      <div className="headspaceNav-search">
        <LuSearch size={23} />
      </div>
      <div className="headspaceNav-logo">
        <Logo />
      </div>
      <div className="headspaceNav-profile">
        <ProfileNav />
      </div>
     
    </div>
  );
}
