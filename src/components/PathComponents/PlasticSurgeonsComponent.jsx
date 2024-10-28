import "./PlasticSurgeonsCard.css";
import Nav from "../Home/Nav";
import PlasticSurgeons from "../Home/PlasticSurgeons";
import PlasticSurgeonsCard from "./PlasticSurgeonsCard";
import Footer from "../Home/Footer";
import PlasticSurgeonsIntro from "./PlasticSurgeonsIntro";

function PlasticSurgeonsComponent() {
  return (
    <>
      <Nav />
      <PlasticSurgeons />
      <div className="plastic-surgeons-card-top">
        <PlasticSurgeonsCard />
      </div>
      <Footer />
      {/* <PlasticSurgeonsIntro /> */}
    </>
  );
}

export default PlasticSurgeonsComponent;
