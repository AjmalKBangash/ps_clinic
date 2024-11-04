import "./Common.css";
import Footer from "./Footer";
import Nav from "./Nav";
import "./Procedures.css";
import { FaAngleRight } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrUserExpert } from "react-icons/gr";

function Procedures() {
  return (
    <>
      <Nav />
      <div className="ps-top">
        <div className="ps-title">
          OUR
          <span
            className="common-name-font"
            style={{ color: "#2e8b57", margin: "0" }}
          >
            Procedures
          </span>
        </div>
        <div className="ps-heading">
          "EXPLORE OUR RANGE OF EXPERT PROCEDURES, TAILORED TO HELP YOU
          ACHIEVETHE CONFIDENT, REFINED LOOK YOU DESIRE"
        </div>
        <div className="ps-des">
          <div>
            We have the best{" "}
            <span className="ps-des-clr">
              plastic surgery procedres in Peshawar.
            </span>{" "}
            Our center is a leading destination for{" "}
            <span className="ps-des-clr">
              plastic surgery procedures in Peshawar!
            </span>
          </div>
          <div>
            <span className="ps-des-clr">"At Rejuva Aesthetics</span>, we
            specialize in transformative plastic surgery procedures that enhance
            your natural beauty. From{" "}
            <span className="ps-des-clr">Facial Rejuvenation</span> to body
            contouring, our expert team is here to guide you every step of the
            way."
          </div>
          <div>
            "Our commitment to personalized care and state-of-the-art techniques
            ensures stunning, natural-looking results. Discover the confidence
            of a refined appearance and{" "}
            <span className="ps-des-clr">
              start your journey with us today!
            </span>
            "
          </div>
        </div>
        {window.location.href === "http://localhost:5173/" ? (
          <>
            <div className="common-visit-link-cover">
              <div
                className="common-visit-link ps-visit-link"
                onClick={() => navigate("/plastic-surgeons")}
              >
                VIEW ALL PLASTICS SURGEONS
                <FaAngleRight className="common-visit-link-icon ps-visit-link-icon" />
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div>COSMETIC SURGERY CLINIC #1 IN PESHAWAR</div>
      <div>
        <div className="pro-four-cards">
          <VscWorkspaceTrusted />
        </div>
        <div>Safe</div>
        <div className="pro-four-cards">
          <SiTrustpilot />
          <div>Trust</div>
        </div>
        <div className="pro-four-cards">
          <GrUserExpert />
          <div>EXCELLENCE</div>
        </div>
        <div className="pro-four-cards">
          <FaHandshake />
          <div>ACCESSIBLE</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Procedures;
