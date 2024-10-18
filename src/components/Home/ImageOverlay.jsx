import React from "react";
import "./ImageOverlay.css";
import { FaAngleRight } from "react-icons/fa";
import { FaGift } from "react-icons/fa";

const ImageOverlay = ({ imageSrc, title, description }) => {
  return (
    <>
      <div className="image-overlay-container">
        <img
          src={imageSrc}
          alt="Plastic Surgery"
          className="image-overlay-img"
        />
        <div className="image-overlay-text">
          {/* <h1 className="image-overlay-title">{title}</h1>
        <p className="image-overlay-description">{description}</p> */}
          <div style={{ fontSize: "2.5vh", fontWeight: "700" }}>
            FROM <div className="img-ovrl-price">/Rs:1000\</div> MONTHLY
          </div>
          <div className=" img-ovrl-txt">
            Plastic Surgery Clinic #1 in Peshawar
          </div>
          <div className="img-ovrl-txt img-overl-free-consul">
            <span style={{ color: "#FFCC29" }}>FREE</span> CO
            <span
              style={{
                borderTop: "2px solid #FFCC29",
                borderBottom: "2px solid #FFCC29",
                fontFamily: "inherit",
                fontWeight: "inherit",
              }}
            >
              NSU
            </span>
            LTATION{" "}
          </div>
          <div
            // className="image-overlay-description"
            className="img-ovrl-last-fur"
            style={{ fontSize: "2.5vh", fontWeight: "700" }}
          >
            <div className="nav-talk img-ovrl-quote">GET A QUOTE</div> OR{" "}
            <div
              className="nav-talk img-ovrl-call"
              style={{
                backgroundColor: "white",
                color: "black",
                textWrap: "nowrap",
              }}
            >
              CALL 3337484678
            </div>
          </div>
        </div>
      </div>
      <div className="img-ovrl-2ndpor">
        <div className="img-ovrl-2ndpor-logo">
          <FaGift />
        </div>
        <div className="img-ovrl-2ndpor-title">New Specials</div>
        <div className="img-ovrl-2ndpor-des" style={{ fontWeight: "900" }}>
          Find the best prices on plastic surgery in Peshawar.
        </div>
        <div className="nav-talk img-ovrl-2ndpor-specials ">
          VIEW SPECIALS{" "}
          <FaAngleRight className="img-ovrl-2ndpor-specials-icon" />
        </div>
      </div>
    </>
  );
};

export default ImageOverlay;
