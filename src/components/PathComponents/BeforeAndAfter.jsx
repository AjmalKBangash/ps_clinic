import "./BeforeAndAfter.css";
import Nav from "../Home/Nav";
import Footer from "../Home/Footer";
import Gallery from "./Gallery";

function BeforeAndAfter() {
  return (
    <>
      <Nav />
      <div className="ps-top pss-top">
        <div className="ps-title" style={{ color: "#ff5733", fontSize: "6vh" }}>
          BEFORE{" "}
          <span
            className="common-name-font"
            style={{ color: "#ff5733", margin: "0" }}
          >
            and
          </span>{" "}
          AFTER
        </div>
        <div className="ps-des" style={{ fontSize: "22px", fontWeight: "700" }}>
          <div style={{ fontWeight: "inherit" }}>
            Take a few minutes and check out the surgeries of our{" "}
            <span className="ps-des-clr" style={{ fontWeight: "inherit" }}>
              certified surgeons.
            </span>
          </div>
        </div>
      </div>
      <Gallery />
      <Footer />
    </>
  );
}

export default BeforeAndAfter;
