import "./Promotion.css";
import "./ImageWT.css"; // We'll use external CSS for styling
import { FaArrowRight } from "react-icons/fa6";

const Promotion = () => {
  return (
    <div className="image-container" style={{ minHeight: "500px" }}>
      {/* Three images stacked behind */}
      <img
        src="/ps_clinic/pk-currency.jpg"
        alt="background"
        className="bg-image"
      />
      {/* <img
        src="/ps_clinic/ps_clinic003.png"
        alt="background"
        className="bg-image"
      />
      <img
        src="/ps_clinic/ps_clinic003.png"
        alt="background"
        className="bg-image"
      /> */}
      {/* Text on top of the images */}
      <div className="overlay-text">
        <h1 className="img-ovrl-price">AFFILIATE PROGRAM</h1>
        {/* <h1 className="img-ovrl-price">FINANCING AVAILABLE*</h1> */}
        <div
          style={{ fontSize: "2vh", fontWeight: "400", margin: "1vh 0 0 0" }}
        >
          "Join our affiliate program and earn commissions by promoting top-tier
          plastic surgery services with proven results."{" "}
        </div>
        <div style={{ margin: "2vh" }}>REJUVA AESTHETICS LOGO HERE</div>
        <div
          // className="image-overlay-description"
          className="img-ovrl-last-fur"
          style={{ fontSize: "2.5vh", fontWeight: "700" }}
        >
          <div className="nav-talk img-ovrl-quote">CONTACT US TO HELP</div> OR{" "}
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
  );
};

export default Promotion;
