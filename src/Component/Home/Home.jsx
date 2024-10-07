import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="home-tot-cont">
        <div className="home-cont-img">
          <img
            className="home-img"
            src="https://images.ctfassets.net/v3n26e09qg2r/4D9CSEOzzm4zjCdPbmkFKE/927da3b4c128c841bb0abb4a16747f9e/Hero_Image_Left.webp?fm=webp&w=3840&q=75"
            alt=""
          />
        </div>
        <div className="home-cont">
          <p className="home-head">
            Make it your year <br /> with Headspace
          </p>
          <div className="home-yellow-cont">
            <p className="home-yellow-head">
              Free for 14 days, then ₹1499/year
            </p>

            <p className="home-yellow-txt">
              ₹124.92 per month, billed annually
            </p>
          </div>
          <p className="home-small-txt">
            After your free trial, the annual subscription is ₹1499 INR and
            automatically renews each year.
            <br /> Are you a post-secondary or university student? Save 85%,
            with valid SheerID student verification, for our
            <br />
            Student plan
          </p>
          <button className="home-free-btn">Try for free</button>
        </div>
        <div className="home-cont-img">
          <img
            className="home-img"
            src="https://images.ctfassets.net/v3n26e09qg2r/3Ciub8Qc1UhiOVboAfmazR/0a0737be4b3eabc7d9c9c0d00e9f94f7/Hero_Right_Image_Default-2022.png?fm=webp&w=3840&q=75"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
