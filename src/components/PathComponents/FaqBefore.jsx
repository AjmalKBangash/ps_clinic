import "./FaqBefore.css";
import Footer from "../Home/Footer";
import Nav from "../Home/Nav";
import FAQ from "./FAQ";
import { BiSolidHelpCircle } from "react-icons/bi";
import { BsFillExclamationOctagonFill } from "react-icons/bs";

function FaqBefore() {
  return (
    <>
      <Nav />
      <div className="faq-top">
        <div className="faq-first-por">
          <div className="faq-first-por-title">FAQ BEFORE SURGERY</div>
          {/* <FAQS data={{ Question: "Qestion", Answer: "answer" }} /> */}
          <div style={{ margin: "3vh 0" }}>
            <FAQ
              data={{
                Question: "What should I expect before surgery?",
                Answer: "You should consult your doctor... ",
              }}
            />
            <FAQ
              data={{
                Question: "How long is the recovery time?",
                Answer: "The recovery time is around 2 weeks...",
              }}
            />
          </div>
          <div className="faq-first-por-remember">
            <BsFillExclamationOctagonFill className="faq-first-por-remember-icon" />
            <div style={{ fontWeight: "700" }}>
              Remember if you do not find your answer in our FAQ, contact your
              coordinator or your pre-op.
            </div>
            <div style={{ fontWeight: "700" }}>Thanks!</div>
          </div>
          {/* Add more FAQs as needed */}
        </div>
        <div className="faq-sec-por">
          <div className="faq-sec-por-help">
            <BiSolidHelpCircle className="faq-sec-por-help-icon" />
            HELP
          </div>
          <div className="faq-sec-por-card">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Fund and Cancellation Policy</li>
            <li>Privacy Policy</li>
            <li>Notice to Patients</li>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FaqBefore;
