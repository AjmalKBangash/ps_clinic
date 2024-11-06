import "./Common.css";
import Footer from "./Footer";
import Nav from "./Nav";
import "./Procedures.css";
import { FaAngleRight } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrUserExpert } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import PlasticSurgery from "./PlasticSurgery";
// import { FaAngleRight } from "react-icons/fa";

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
      <div className="ps-heading ps-heading-pro">
        COSMETIC SURGERY CLINIC #1 IN PESHAWAR
      </div>
      <div className="pro-four-cards-top">
        <div className="pro-four-cards pro-four-cards-greenish">
          <VscWorkspaceTrusted className="pro-four-cards-icons" />
          <div>SAFE</div>
        </div>
        <div className="pro-four-cards pro-four-cards-greenish">
          <SiTrustpilot className="pro-four-cards-icons" />
          <div>TRUSTED</div>
        </div>
        <div className="pro-four-cards pro-four-cards-greenish">
          <GrUserExpert className="pro-four-cards-icons" />
          <div>EXCELLENCE</div>
        </div>
        <div className="pro-four-cards pro-four-cards-greenish">
          <FaHandshake className="pro-four-cards-icons" />
          <div>ACCESSIBLE</div>
        </div>
      </div>
      <div className="ps-des" style={{ textAlign: "center" }}>
        <div>
          "At Rejuva Aesthetics, we bring your beauty goals to life with expert
          precision and advanced procedures. Our highly trained specialists
          focus on delivering personalized transformations that enhance your
          natural features and boost your confidence."
        </div>
        <br />
        <div>
          "From facial rejuvenation to body sculpting, we offer a wide range of
          surgical and non-surgical treatments tailored to each patient’s unique
          needs. Our commitment to transparency and excellence ensures a
          seamless, comfortable experience every step of the way."
        </div>
        <br />
        <div>
          "Discover the exceptional care and artistry that define our approach.
          At Rejuva Aesthetics, we believe in empowering you to look and feel
          your best with results that are beautifully natural and refined."
        </div>
        <br />
      </div>
      <div className="pro-procedure-cards">
        <div className="overlay-card">
          <img
            // src="https://via.placeholder.com/300" // Replace with your image source
            src="/ps_clinic/ps_clinic001.jpg"
            alt="Card Background"
            className="overlay-card-image"
          />
          <div className="overlay-content">
            <h2 className="overlay-title">Body Surgery</h2>
            <br />
            <hr
              style={{
                height: "4px",
                width: "60px",
                backgroundColor: "white",
              }}
            />
            <br />
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
          </div>
        </div>
        <div className="overlay-card">
          <img
            // src="https://via.placeholder.com/300" // Replace with your image source
            src="/ps_clinic/ps_clinic001.jpg"
            alt="Card Background"
            className="overlay-card-image"
          />
          <div className="overlay-content">
            <h2 className="overlay-title">Hair Transplant</h2>
            <br />
            <hr
              style={{
                height: "4px",
                width: "60px",
                backgroundColor: "white",
              }}
            />
            <br />
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
          </div>
        </div>
        <div className="overlay-card">
          <img
            // src="https://via.placeholder.com/300" // Replace with your image source
            src="/ps_clinic/ps_clinic001.jpg"
            alt="Card Background"
            className="overlay-card-image"
          />
          <div className="overlay-content">
            <h2 className="overlay-title">Your Another Service Here</h2>
            <br />
            <hr
              style={{
                height: "4px",
                width: "60px",
                backgroundColor: "white",
              }}
            />
            <br />
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
          </div>
        </div>
        <div className="overlay-card">
          <img
            // src="https://via.placeholder.com/300" // Replace with your image source
            src="/ps_clinic/ps_clinic001.jpg"
            alt="Card Background"
            className="overlay-card-image"
          />
          <div className="overlay-content">
            <h2 className="overlay-title">Your Another Service Here</h2>
            <br />
            <hr
              style={{
                height: "4px",
                width: "60px",
                backgroundColor: "white",
              }}
            />
            <br />
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
            <p className="overlay-subtopic">
              <span className="pro-right-icon">{">"}</span>Subtopic Name
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <PlasticSurgery />
      <Footer />
    </>
  );
}

export default Procedures;
