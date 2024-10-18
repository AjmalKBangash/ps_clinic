import "./PlasticSurgeons.css";
import "./PlasticSurger.css";
import { FaAngleRight } from "react-icons/fa";

function PlasticSurgery() {
  return (
    <div className="ps-top pss-top">
      <div className="ps-title">PLASTIC SURGERY</div>
      <div className="ps-title" style={{ color: "#ff5733", fontSize: "6vh" }}>
        BEFORE{" "}
        <span
          className="common-name-font"
          style={{ color: "#ff5733", margin: "0" }}
        >
          and
        </span>{" "}
        AFTER
      </div>
      <div className="ps-des">
        <div>
          Take a few minutes and take a look at our BBL before and after
          pictures of our{" "}
          <span className="ps-des-clr">Peshawar plastic surgeons.</span>
        </div>
      </div>
      <div className="common-visit-link-cover">
        <div
          className="common-visit-link treatment-visit-link"
          style={{ margin: "0 auto" }}
        >
          BEFORE AND AFTER <FaAngleRight className="common-visit-link-icon" />
        </div>
      </div>
    </div>
  );
}

export default PlasticSurgery;
