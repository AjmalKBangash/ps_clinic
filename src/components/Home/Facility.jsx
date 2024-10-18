import "./Facility.css";
import "./Common.css";
import { FaArrowRight } from "react-icons/fa6";
function Facility() {
  return (
    <>
      <div className="facility-top">
        <div className="facility-1st-por">
          <div className="facility-1st-por-heading">
            Rejuve Aesthetics Plastic Surgery Clinic in{" "}
            <span className="common-name-font">
              <span
                style={{
                  borderBottom: "4px solid black",
                  fontFamily: "inherit",
                  fontWeight: "inherit",
                }}
              >
                P
              </span>
              eshawar
            </span>
          </div>
          <div className="facility-1st-por-des">
            At Rejuva Aesthetics Plastic Surgery, we offer exceptional plastic
            surgery procedures at affordable prices. Our clinic boasts
            state-of-the-art facilities and is conveniently located near
            University Of Peshawar, Beautiful Town, and other popular
            attractions. Our team of certified doctors, members of the Pakistan
            Society of Plastic Surgeons, and certified by the Pakistan Board of
            Plastic Surgery, have served the community for over 25 years. We are
            committed to our patient’s safety, and we strive to guide and assist
            them throughout their plastic surgery journey. We offer a wide range
            of cosmetic surgeries, including{" "}
            <span style={{ color: "black" }}>
              liposuction, tummy tuck, BBL, breast augmentation
            </span>{" "}
            with implants, and more. Rejuva Aesthetics Plastic Surgery clinic #1
            in Peshawar for the best specials and prices on cosmetic procedures
            in the Peshawar, Town area.
          </div>
          <div className=" common-btn ">
            OUR FACILITY
            {/* <FaAngleRight className="common-btn-icon" />{" "} */}
            {/* <FaArrowRightLong /> */}
            <FaArrowRight className="common-btn-icon" />
          </div>{" "}
        </div>
        <div className="facility-2nd-por">
          <img
            className="facility-2nd-por"
            src="ps_clinic/ps_clinic002.jpeg"
            alt="Rejuva Aesthetics Building"
          />
        </div>
      </div>
    </>
  );
}

export default Facility;
