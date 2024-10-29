import "./Affiliate.css";
import Nav from "../Home/Nav";
import Promotion from "../Home/Promotion";
import Footer from "../Home/Footer";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

function Affiliate() {
  return (
    <>
      <Nav />
      <Promotion />
      <>
        <div className="aff-top">
          <div className="aff-first-por">
            <div className="aff-first-por-heading">
              We have the Best Plastic Surgery{" "}
              <span
                style={{
                  borderBottom: "2px solid rgb(80, 80, 80)",
                  fontWeight: "inherit",
                }}
              >
                Affiliate
              </span>{" "}
              Program in Peshawar, Pakistan
            </div>
            <div className="aff-first-por-des">
              Join the <bold>Rejuva Aesthetics</bold> affiliate program and
              start earning by helping people discover the beauty of confidence!
              Whether you are a blogger, influencer, or someone passionate about
              health and beauty, our program allows you to promote a trusted
              name in plastic surgery and aesthetic care. By partnering with us,
              you can share our advanced cosmetic procedures, from rejuvenating
              facelifts to body contouring, and{" "}
              <span
                style={{
                  // color: "black",
                  fontStyle: "italic",
                  fontWeight: "400",
                  textDecoration: "underline",
                }}
              >
                earn commissions for every client referral.
              </span>
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
          </div>
          <div className="aff-sec-por">
            <div className="aff-sec-por-title">CALL US TODAY</div>
            <div className="aff-sec-por-des">
              or write us and we are having the best affiliate program{" "}
            </div>
            <hr />
            <div>
              <div>CONTACT</div>
              <div style={{ fontWeight: "200" }}>(0333) 9998877</div>
            </div>
            <hr />
            <div style={{ fontWeight: "500", fontSize: "2.5vh" }}>
              rejuvaaesthetics@gmail.com
            </div>
            <hr />
            <div>
              <FaFacebook style={{ color: "#3b5998" }} /> <FaInstagram />{" "}
              <FaYoutube style={{ color: "red" }} /> <FaTiktok />
            </div>
          </div>
        </div>
      </>
      <Footer />

      <div></div>
    </>
  );
}

export default Affiliate;
