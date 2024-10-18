import "./Common.css";
import "./Procedures.css";
import ProceduresCard from "./ProceduresCard";
import { FaAngleRight } from "react-icons/fa";

function Procedures() {
  return (
    <div className="procedures-top">
      {/* <div>
        <span>Most Popular</span> Plastic Surgery Procedures
      </div> */}
      <div className="common-name-font">Most Popular</div>
      <div className="facility-1st-por-heading">
        PLASTIC SURG
        <span
          style={{ borderBottom: "2px solid black", fontWeight: "inherit" }}
        >
          ERY
        </span>{" "}
        PROCEDURES
      </div>
      <div className="procedure-card">
        <ProceduresCard />
      </div>
      <div className="procedure-visit-link">
        <div className="common-visit-link">
          VIEW ALL PROCEDURES{" "}
          <FaAngleRight className="common-visit-link-icon" />
        </div>
      </div>
    </div>
  );
}

export default Procedures;
