import "./PlasticSurgeonsIntro.css";
import Footer from "../Home/Footer";
import Nav from "../Home/Nav";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function PlasticSurgeonsIntro() {
  return (
    <>
      <Nav />
      <>
        {/* <div style={{ width: "100%" }}> */}
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
        {/* </div> */}
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
      </>
      <Footer />
    </>
  );
}

export default PlasticSurgeonsIntro;
