import "./PlasticSurgeons.css";
import { FaAngleRight } from "react-icons/fa";

function PlasticSurgeons() {
  return (
    <div className="ps-top">
      <div className="ps-title">
        PLASTIC
        <span
          className="common-name-font"
          style={{ color: "#2e8b57", margin: "0" }}
        >
          Surgeons
        </span>
      </div>
      <div className="ps-heading">
        THESE DOCTORS ARE BOARD CERTIFIED PLASTIC SURGEONS
      </div>
      <div className="ps-des">
        <div>
          We have the best{" "}
          <span className="ps-des-clr">plastic surgeons in Peshawar.</span> Our
          center is a leading destination for{" "}
          <span className="ps-des-clr">plastic surgery in Peshawar FL!</span>
        </div>
        <div>
          The best plastic surgeon in Miami is a professional who has the
          experience and expertise to perform these surgeries. He has a good
          reputation, and is qualified to do the surgery.
        </div>
        <div>
          The best bbl surgeon in Miami is one who has performed this procedure
          many times before. He knows what to expect and what complications
          could arise.
        </div>
        <div>
          <span className="ps-des-clr">Rejuva Plastic Surgery Peshawar</span>{" "}
          can arrange our patients with maximum comfort with our certified
          staff, trained to anticipate all of your needs and wishes during any
          cosmetic surgery or procedure.We are devoted to bringing your “Dreams
          Come True”.
        </div>
      </div>
      <div className="common-visit-link-cover">
        <div className="common-visit-link ps-visit-link">
          VIEW ALL PLASTICS SURGEONS
          <FaAngleRight className="common-visit-link-icon ps-visit-link-icon" />
        </div>
      </div>
    </div>
  );
}

export default PlasticSurgeons;
