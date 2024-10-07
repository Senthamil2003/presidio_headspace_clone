import React from "react";
import "./Navbar.css";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/MyHeadspaceSlice";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="nav_tot_cont">
      <div style={{ display: "flex",alignItems:"center", gap: "10px" }}>
        <RxHamburgerMenu className="hamburger" size={29} />
        <Logo />
      </div>

      <div className="nav-items-tot-cont">
        <div className="nav-item-first">
          <p className="nav-item-txt">Articles & Resources</p>
          <p className="nav-item-txt"> Meditation</p>
          <p className="nav-item-txt">Sleep</p>
          <p className="nav-item-txt">Mindfulness</p>
          <p className="nav-item-txt">Mental Health </p>
        </div>
        <div className="nav-item">
          <p className="nav-item-txt">Plans</p>
          <p className="nav-item-txt">For Business</p>
          <p className="nav-item-txt">About</p>
          <p className="nav-item-txt">Help</p>
          <p
            className="nav-item-txt"
            onClick={() => {
              !isLoggedIn
                ? dispatch(login())
                : navigate("/myHeadspace/meditate");
            }}
          >
            {isLoggedIn ? "My Heaspace" : "Login"}
          </p>
        </div>
        <div className="nav-item-button">
          <button className="nav-button">Try For Free</button>
        </div>
      </div>
    </div>
  );
}
