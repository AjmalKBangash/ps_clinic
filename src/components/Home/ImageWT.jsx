import React from "react";
import "./ImageWT.css"; // We'll use external CSS for styling
import { FaArrowRight } from "react-icons/fa6";

const ImageWT = () => {
  return (
    <div className="image-container">
      {/* Three images stacked behind */}
      <img
        src="ps_clinic/ps_clinic003.png"
        alt="background"
        className="bg-image"
      />
      <img
        src="ps_clinic/ps_clinic003.png"
        alt="background"
        className="bg-image"
      />
      <img
        src="ps_clinic/ps_clinic003.png"
        alt="background"
        className="bg-image"
      />
      {/* Text on top of the images */}
      <div className="overlay-text">
        <h1 className="img-ovrl-price">REJUVA STORE</h1>
        <div
          style={{ fontSize: "3vh", fontWeight: "700", margin: "1vh 0 0 0" }}
        >
          POST-OP CARE PRODUCTS
        </div>
        <div
          className="common-name-font"
          style={{ color: "white", margin: "0" }}
        >
          and
        </div>
        <div
          style={{
            fontSize: "3vh",
            fontWeight: "700",
            margin: "1vh 0 0 0",
          }}
        >
          COSMETIC TREATMENTS
        </div>
        <div className=" common-btn imagewt-card-btn">
          SHOP AT THE CLINIC
          <FaArrowRight className="common-btn-icon" />
        </div>
      </div>
    </div>
  );
};

export default ImageWT;
