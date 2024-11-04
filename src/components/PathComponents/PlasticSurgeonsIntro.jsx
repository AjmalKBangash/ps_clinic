import "./PlasticSurgeonsIntro.css";
import "./Affiliate.css";
import Footer from "../Home/Footer";
import Nav from "../Home/Nav";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { RiHospitalFill } from "react-icons/ri";
import { FaBedPulse } from "react-icons/fa6";
import Gallery from "./Gallery";

function PlasticSurgeonsIntro() {
  return (
    <>
      <Nav />
      <>
        <iframe
          className="plastic-surgery-dr-intro"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/iE9Qb8dHqWI?si=o1o_5lb-0crcZkuu"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="plastic-surgery-intro-dr-name-pic">
          <img
            src="/ps_clinic/ps_clinic001.jpg"
            alt="plastic surgeon doctor"
            className="plastic-surgery-intro-dr-img"
          />
          <div className="plastic-surgery-intro-dr-name">
            <h1 style={{ fontWeight: "700" }}>Dr.Imran Orakzai</h1>
            <div style={{ color: "rgb(80, 80, 80)" }}>
              Board Certified Doctor
            </div>
          </div>
          <div>
            <div className="footer-first-por-socials plastic-surgery-intro-dr-social-links">
              <span>Follow Me</span>
              <FaFacebook className="footer-first-por-social-icons" />
              <FaInstagram className="footer-first-por-social-icons" />
              <FaYoutube className="footer-first-por-social-icons" />
              <FaXTwitter className="footer-first-por-social-icons" />
            </div>
          </div>
        </div>
        {/* /////////////////////////// doctor explanation  */}
        <div className="aff-top">
          <div className="aff-first-por">
            <div className="aff-first-por-heading">
              <span>
                <FaUserGraduate />
              </span>{" "}
              <span
                style={{
                  borderBottom: "2px solid rgb(80, 80, 80)",
                  fontWeight: "inherit",
                }}
              >
                About
              </span>{" "}
              Dr Imran Orakzai
            </div>
            <div className="aff-first-por-des">
              Join the <bold>Rejuva Aesthetics</bold> plastic surgery clinic for
              Dr Imran Orakzai in Peshawar. Dr. Imran Orakzai was raised in
              Miami, Florida. received a tuition scholarship and graduated with
              Honors from Florida International University. He continued his
              academic success at the University of Miami School of Medicine by
              graduating at the top of his class. subsequently being inducted
              into the prestigious Alpha Omega Alpha Honor Society.
            </div>
            <div className="aff-first-por-des">
              At <bold>Rejuva Aesthetics</bold>, we focus on delivering
              exceptional results and personalized care to help clients look and
              feel their best. As an <bold>affiliate</bold>, you’ll be part of a
              growing network that shares our vision of enhancing natural beauty
              and boosting self-esteem. Our program offers competitive payouts,
              marketing materials, and full support to make your journey as
              seamless as possible. Join us in spreading the word about Rejuva
              Aesthetics and start turning your audience into satisfied clients!
            </div>
            <div className="aff-first-por-des">
              Therefore, In order to better serve his patients, Dr. Rodriguez
              has focused on providing patients a limited number of procedures
              with an emphasis on safety and results. Specifically, Dr.
              Rodriguez has performed more than 2000 procedures on the face and
              body with his patients comfortably under local anesthesia.
            </div>
            <div className="aff-first-por-des">
              Destined to become a physician, he continued his academic success
              at the University of Miami School of Medicine by graduating in the
              top of his class and subsequently being inducted into the
              prestigious Alpha Omega Alpha Honor Society. Additionally, he
              participated in numerous local and national organizations.
              Including elected to serve as President of the School of Medicine.
              He has also researched and written numerous papers in his field.
            </div>
          </div>
          <div className="aff-sec-por" style={{ fontSize: "15px" }}>
            {/* //////////// */}
            <div className="aff-first-por-heading">
              <span>
                <FaUserGraduate />
              </span>{" "}
              Board Certifications
            </div>
            <div className="aff-first-por-des" style={{ fontSize: "15px" }}>
              PMC Certified Plastic Surgeon and PMC Registration number is
              hh68vhjh76587587
            </div>
            <div className="aff-first-por-heading">
              <span>
                <FaAward />
              </span>{" "}
              Awards
            </div>{" "}
            <div className="aff-first-por-des">
              The Peshawar Board of Plastic Surgery
            </div>
            <div className="aff-first-por-heading">
              <span>
                <RiHospitalFill />
              </span>{" "}
              Hospital Privileges
            </div>{" "}
            <div className="aff-first-por-des">HayatAbad Medical Complex</div>
            <div className="aff-first-por-heading">
              <span>
                <FaBedPulse />
              </span>{" "}
              Specialized
            </div>{" "}
            <div className="plastic-surgery-intro-specialization">
              <div style={{ margin: "10px 35px 10px 10px" }}>
                <h6 style={{ fontWeight: "500" }}>Hair Transplant</h6>{" "}
                <div
                  className="aff-first-por-des"
                  style={{ color: "#2e8b57", padding: "3px 0 3px 15px" }}
                >
                  <li>PRP</li>
                  <li>Hair Removal</li>
                  <li>Hair Presence</li>
                </div>
              </div>
              <div style={{ margin: "10px 35px 10px 10px" }}>
                <h6 style={{ fontWeight: "500" }}>Hair Transplant</h6>{" "}
                <div
                  className="aff-first-por-des"
                  style={{ color: "#2e8b57", padding: "3px 0 3px 15px" }}
                >
                  <li>PRP</li>
                  <li>Hair Removal</li>
                  <li>Hair Presence</li>
                </div>
              </div>
              <div style={{ margin: "10px 35px 10px 10px" }}>
                <h6 style={{ fontWeight: "500" }}>Hair Transplant</h6>{" "}
                <div
                  className="aff-first-por-des"
                  style={{ color: "#2e8b57", padding: "3px 0 3px 15px" }}
                >
                  <li>PRP</li>
                  <li>Hair Removal</li>
                  <li>Hair Presence</li>
                </div>
              </div>
              <div style={{ margin: "10px 35px 10px 10px" }}>
                <h6 style={{ fontWeight: "500" }}>Hair Transplant</h6>{" "}
                <div
                  className="aff-first-por-des"
                  style={{ color: "#2e8b57", padding: "3px 0 3px 15px" }}
                >
                  <li>PRP</li>
                  <li>Hair Removal</li>
                  <li>Hair Presence</li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="aff-first-por-des"
          style={{
            padding: "50px",
            textAlign: "center",
            fontStyle: "italic",
            fontWeight: "500",
          }}
        >
          *Disclaimer: Dr. Imran Orakzai is not an employee and/or agent, in any
          manner, of Rejuva Aesthetics. Dr. Imran Orakzai exercises complete
          independent professional judgment when rendering medical services for
          patients such that Rejuva is not directly, indirectly, and/or
          vicariously liable for the Dr. Imran Orakzai provision of medical
          services.
        </div>
      </>
      {/* ////////////////////////// */}
      {/* <div className="plastic-surgery-intro-dr-name-pic plastic-surgery-intro-dr-name-pic-gallary">
        <div className="plastic-surgery-intro-dr-name">
          <h1 style={{ fontWeight: "700" }}>
            Dr.Imran Orakzai Surgueries and Procedures
          </h1>
          <div style={{ color: "rgb(80, 80, 80)" }}>Board Certified Doctor</div>
        </div>
      </div> */}
      <div style={{ textAlign: "center" }}>
        <div className="common-name-font">Dr.Imran Orakzai</div>
        <div className="facility-1st-por-heading">
          Surgeries{" "}
          <span
            style={{ borderBottom: "2px solid black", fontWeight: "inherit" }}
          >
            &
          </span>{" "}
          Procedures
        </div>
      </div>
      {/* ////////////////////////// */}
      <Gallery />
      <Footer />
    </>
  );
}

export default PlasticSurgeonsIntro;
