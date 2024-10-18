import "./Common.css";
import "./Treatments.css";
import TreatmentsCard from "./TreatmentsCard";
import { FaAngleRight } from "react-icons/fa";

function Treatments() {
  return (
    <div className="treatments-top">
      {/* <div>
        <span>Most Popular</span> Plastic Surgery Procedures
      </div> */}
      <div className="common-name-font" style={{ color: "#ff5733" }}>
        Most Popular
      </div>
      <div className="facility-1st-por-heading">
        COSMETIC{" "}
        <span
          style={{ borderBottom: "2px solid black", fontWeight: "inherit" }}
        >
          TRE
        </span>
        ATMENTS
      </div>
      <div className="procedure-card">
        {/* <ProceduresCard /> */}
        <TreatmentsCard />
      </div>
      <div className="procedure-visit-link">
        <div className="common-visit-link treatment-visit-link">
          VIEW ALL TREATMENTS{" "}
          <FaAngleRight className="common-visit-link-icon" />
        </div>
      </div>
    </div>
  );
}

export default Treatments;
