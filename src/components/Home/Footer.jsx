import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className="footer-first-por">
        <div className="footer-first-por-socials">
          <span>Follow Us</span>
          <FaFacebook className="footer-first-por-social-icons" />
          <FaInstagram className="footer-first-por-social-icons" />
          <FaYoutube className="footer-first-por-social-icons" />
          <FaXTwitter className="footer-first-por-social-icons" />
        </div>
        <div className="footer-first-por-signup">
          <div className="footer-first-por-signup-heading">
            Sign up for news and special offers
          </div>
          <div className="footer-first-por-signup-input-form">
            <input placeholder="Email Address" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
      <div className="footer-second-por">
        <div className="footer-second-por-links">
          <div className="footer-second-por-links-each footer-sec-por-links-social">
            <div className="footer-sec-por-links-titles">Get in touch</div>
            <li>
              <MdWifiCalling3 className="footer-sec-por-links-social-icons" />{" "}
              (0092333) 9998877
            </li>
            <li>
              <FaLocationDot className="footer-sec-por-links-social-icons" />{" "}
              University Town Road, Peshawar, Rejuva Aesthetics plaza third
              floor.
            </li>
            <li>
              <IoIosTime className="footer-sec-por-links-social-icons" />
              <div style={{ display: "inline" }}>
                <div>Mon - Fri 9:00 am - 6:00 pm</div>
                <div>Saturday 9:00 am - 2:00 pm</div>
              </div>
            </li>
          </div>
          <div className="footer-second-por-links-each footer-sec-por-links-company-services">
            <div className="footer-sec-por-links-titles">Company</div>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Notice to Patients</li>
            <li>Uniquiness</li>
            <li>Careers</li>
          </div>
          <div className="footer-second-por-links-each footer-sec-por-links-company-services">
            <div className="footer-sec-por-links-titles">Services</div>
            <li>Liposuction</li>
            <li>Tummy Tuck</li>
            <li>Brazalian Butt Lift</li>
            <li>Mommy Makeover</li>
            <li>Hair Transplant</li>
            <li>See More...</li>
          </div>
        </div>
        <div className="footer-second-por-des">
          <div>
            *Disclaimer: The Doctors rendering services at Rejuva are not
            employees and/or agents, in any manner, of Rejuva. The Doctors
            exercise complete independent professional judgment when rendering
            medical services for patients such that Rejuva is not directly,
            indirectly, and/or vicariously liable for the Doctor’s provision of
            medical services.
          </div>
          <br />
          <br />
          <div>
            *Disclaimer: Images and videos on this page are of models. It is not
            possible to guarantee a specific result because outcomes vary from
            patient to patient.
          </div>
        </div>
      </div>
      <div className="foter-third-por-copy-rights">
        Copyright {new Date().getFullYear()} - Rejuva Aesthetics Plastic Surgery
        Peshawar,Pakistan | All Rights Reserved
      </div>
    </>
  );
}

export default Footer;
