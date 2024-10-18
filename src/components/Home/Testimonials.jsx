import "./PlasticSurgeons.css";
import "./Testimonials.css";
import { FaAngleRight } from "react-icons/fa";

function Testimonials() {
  return (
    <div className="ps-top testimonial-top">
      <div className="ps-title">
        PATIENT
        <span
          className="common-name-font"
          style={{ color: "#2e8b57", margin: "0" }}
        >
          Testimonials
        </span>
      </div>
      <div className="ps-des">
        <div>
          Real testimonials from patients happy with their results at Xiluet
          Plastic Surgery{" "}
          <span className="ps-des-clr">Rejuva Aesthetics Plastic Surgery.</span>
        </div>
      </div>
      <div className="testimonial-yt-vids">
        <iframe
          className="testimonial-yt-vids-iframe"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/iE9Qb8dHqWI?si=o1o_5lb-0crcZkuu"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="testimonial-yt-vids-iframe"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/iE9Qb8dHqWI?si=o1o_5lb-0crcZkuu"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <iframe
          className="testimonial-yt-vids-iframe"
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/iE9Qb8dHqWI?si=o1o_5lb-0crcZkuu"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="common-visit-link-cover">
        <div className="common-visit-link ps-visit-link">
          VIEW MORE TESTIMONIALS
          <FaAngleRight className="common-visit-link-icon ps-visit-link-icon" />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
