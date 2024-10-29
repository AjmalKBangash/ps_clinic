import "./PlasticSurgeonsCard.css";
import "../Home/Common.css";
import "../Home/ProceduresCard.css";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function PlasticSurgeonsCard() {
  const navigate = useNavigate();
  return (
    <>
      <>
        <div className="procedurecard-card">
          <div className="procedurecard-img-div">
            <img
              src="/ps_clinic/ps_clinic001.jpg"
              className="procedurecard-img"
              style={{
                borderTopRightRadius: "200px",
                borderTopLeftRadius: "200px",
                // borderBottomLeftRadius: "200px",
              }}
            />
          </div>
          <div className="procedurecard-title">Dr Imran Orakzai</div>
          <div className="procedurecard-des">
            Breast augmentation is a cosmetic surgical procedure designed to
            increase a woman’s breasts’ size, shape, or fullness. It involves
            inserting breast implants beneath the breast tissue to enhance the
            size and appearance of the breasts.
          </div>
          <div
            className="procedurecard-btn"
            onClick={() => navigate("/plastic-surgeons/" + "dr-imran-orakzai")}
          >
            <div className=" common-btn ">
              OUR FACILITY
              {/* <FaAngleRight className="common-btn-icon" />{" "} */}
              {/* <FaArrowRightLong /> */}
              <FaArrowRight className="common-btn-icon" />
            </div>
          </div>
        </div>
      </>{" "}
      <>
        <div className="procedurecard-card">
          <div className="procedurecard-img-div">
            <img
              src="/ps_clinic/ps_clinic002.jpeg"
              className="procedurecard-img"
              style={{
                borderTopRightRadius: "200px",
                borderTopLeftRadius: "200px",
                // borderBottomLeftRadius: "200px",
              }}
            />
          </div>
          <div className="procedurecard-title">Dr Zarak Khan</div>
          <div className="procedurecard-des">
            Breast augmentation is a cosmetic surgical procedure designed to
            increase a woman’s breasts’ size, shape, or fullness. It involves
            inserting breast implants beneath the breast tissue to enhance the
            size and appearance of the breasts.
          </div>
          <div
            className="procedurecard-btn"
            onClick={() => navigate("/plastic-surgeons/" + "dr-zarak-khan")}
          >
            <div className=" common-btn ">
              OUR FACILITY
              {/* <FaAngleRight className="common-btn-icon" />{" "} */}
              {/* <FaArrowRightLong /> */}
              <FaArrowRight className="common-btn-icon" />
            </div>
          </div>
        </div>
      </>{" "}
      <>
        <div className="procedurecard-card">
          <div className="procedurecard-img-div">
            <img
              src="/ps_clinic/ps_clinic001.jpg"
              className="procedurecard-img"
              style={{
                borderTopRightRadius: "200px",
                borderTopLeftRadius: "200px",
                // borderBottomLeftRadius: "200px",
              }}
            />
          </div>
          <div className="procedurecard-title">Dr Ekramuddin</div>
          <div className="procedurecard-des">
            Breast augmentation is a cosmetic surgical procedure designed to
            increase a woman’s breasts’ size, shape, or fullness. It involves
            inserting breast implants beneath the breast tissue to enhance the
            size and appearance of the breasts.
          </div>
          <div
            className="procedurecard-btn"
            onClick={() => navigate("/plastic-surgeons/" + "dr-ekramuddin")}
          >
            <div className=" common-btn ">
              OUR FACILITY
              {/* <FaAngleRight className="common-btn-icon" />{" "} */}
              {/* <FaArrowRightLong /> */}
              <FaArrowRight className="common-btn-icon" />
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default PlasticSurgeonsCard;
