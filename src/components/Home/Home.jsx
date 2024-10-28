import Nav from "./Nav";
import ImageOverlay from "./ImageOverlay";
import Facility from "./Facility";
import Procedures from "./Procedures";
import Treatments from "./Treatments";
import ImageWT from "./ImageWT";
import PlasticSurgeons from "./PlasticSurgeons";
import Promotion from "./Promotion";
import PlasticSurgery from "./PlasticSurgery";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Nav />
      <ImageOverlay
        // imageSrc="https://your-image-url.com/plastic-surgery.jpg"
        // imageSrc="ps_clinic/ps_clinic001.jpg"
        imageSrc="ps_clinic/ps_clinic_home.jpg"
      />
      <Facility />
      <Procedures />
      <Treatments />
      <ImageWT imageUrl="ps_clinic/ps_clinic003.png" text="Your Text Here" />
      <PlasticSurgeons />
      <Promotion />
      <PlasticSurgery />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
