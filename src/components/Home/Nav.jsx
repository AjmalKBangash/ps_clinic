import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { activeNavLink } from "../../store/Store";
import "./Nav.css";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

function Nav() {
  const navigate = useNavigate();
  const [closingSideMenu, setClosingSideMenu] = useState(false);
  const [showprocedure, setshowprocedure] = useState(false);
  const [showdoctors, setshowdoctors] = useState(false);
  const [showresources, setshowresources] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState({
    procedures: false,
    doctors: false,
    resources: false,
  });

  const [subDropdownVisible, setSubDropdownVisible] = useState({
    breastSurgery: false,
    otherProcedures: false,
  });
  const location = useLocation();
  const dispatch = useDispatch();
  // const showNav_var = useSelector((state) => state.showNav);
  const activeNavLink_nav = useSelector((state) => state.activeNavLink);
  // // Toggle specific dropdowns
  // const toggleDropdown = (key) => {
  //   setDropdownVisible((prevState) => ({
  //     ...prevState,
  //     [key]: !prevState[key],
  //   }));
  // };

  // const toggleSubDropdown = (key) => {
  //   setSubDropdownVisible((prevState) => ({
  //     ...prevState,
  //     [key]: !prevState[key],
  //   }));
  // };
  ////////////////////////////////////////////////////// nnnnnnnnnnnnnnnnnn

  // Add refs for dropdowns
  const proceduresRef = useRef(null);
  const breastSurgeryRef = useRef(null);

  // Toggle specific dropdowns and set height dynamically
  const toggleDropdown = (key, ref) => {
    setDropdownVisible((prevState) => {
      const isVisible = !prevState[key];

      if (isVisible && ref.current) {
        // ref.current.style.height = `${ref.current.scrollHeight}px`;
        ref.current.style.height = "fit-content";
        // ref.current.style.height = `${ref.current.style.height = }px`;
      } else if (ref.current) {
        ref.current.style.height = "0";
      }

      return {
        ...prevState,
        [key]: isVisible,
      };
    });
  };

  const toggleSubDropdown = (key, ref) => {
    setSubDropdownVisible((prevState) => {
      const isVisible = !prevState[key];

      if (isVisible && ref.current) {
        ref.current.style.height = `${ref.current.scrollHeight}px`;
        // ref.current.style.height = "fit-content";
      } else if (ref.current) {
        ref.current.style.height = "0";
      }

      return {
        ...prevState,
        [key]: isVisible,
      };
    });
  };

  useEffect(() => {
    dispatch(activeNavLink(location.pathname));
  }, []);
  return (
    <>
      <div className="nav">
        <div className="nav-logo">LOGO</div>
        <div className="nav-items">
          <li
            className={`nav-hover-clr ${
              activeNavLink_nav === "/" && "nav-hover-clr-active"
            }`}
            onClick={() => navigate("/")}
          >
            HOME
          </li>
          <li
            onMouseOver={() => setshowprocedure(true)}
            onMouseOut={() => setshowprocedure(false)}
            style={{ marginRight: "28px" }}
            className={`nav-hover-clr ${
              activeNavLink_nav === "/procedures" && "nav-hover-clr-active"
            }`}
            onClick={() => navigate("/procedures")}
          >
            PROCEDURES
            <FaAngleDown className="nav-down-arrow" />
            <ul className={`nav-dropdown-menu ${showprocedure ? "show" : ""}`}>
              <li className="nav-hover-clr">hgjhg</li>
              <li className="nav-hover-clr">hvhv</li>
              <li className="nav-hover-clr">bvnb</li>
              <li className="nav-hover-clr">nbvnvn</li>
            </ul>
          </li>
          <li
            onMouseOver={() => setshowdoctors(true)}
            onMouseOut={() => setshowdoctors(false)}
            style={{ marginRight: "28px" }}
            className={`nav-hover-clr ${
              activeNavLink_nav === "/doctors" && "nav-hover-clr-active"
            }`}
            onClick={() => navigate("/doctors")}
          >
            DOCTORS
            <FaAngleDown className="nav-down-arrow" />
            <ul
              className={
                showdoctors ? "nav-dropdown-menu show" : "nav-dropdown-menu"
              }
            >
              <li className="nav-hover-clr">Dr Zarak Khan</li>
              <li className="nav-hover-clr">Dr M.Imran Orakzai</li>
              <li className="nav-hover-clr">Dr Ekramuddin</li>
            </ul>
          </li>
          <li
            className={`nav-hover-clr ${
              activeNavLink_nav === "/affiliate-program" &&
              "nav-hover-clr-active"
            }`}
            onClick={() => navigate("/affiliate-program")}
          >
            AFFILIATE
          </li>
          <li
            className={`nav-hover-clr ${
              activeNavLink_nav === "/gallery" && "nav-hover-clr-active"
            }`}
            onClick={() => navigate("/gallery")}
          >
            GALLARY
          </li>
          <li
            onMouseOver={() => setshowresources(true)}
            onMouseOut={() => setshowresources(false)}
            style={{ marginRight: "28px" }}
            className={`nav-hover-clr ${
              activeNavLink_nav === "/testimonials" ||
              activeNavLink_nav === "/faq-before" ||
              activeNavLink_nav === "/faq-after" ||
              activeNavLink_nav === "/blogs" ||
              activeNavLink_nav === "/rejuva-store"
                ? "nav-hover-clr-active"
                : ""
            }`}
          >
            RESOURCES
            <FaAngleDown className="nav-down-arrow" />
            <ul
              className={`nav-dropdown-menu ${showresources ? "show" : ""}
              `}
            >
              <li
                className={`nav-hover-clr ${
                  activeNavLink_nav === "/testimonials" &&
                  "nav-hover-clr-active"
                }`}
                onClick={() => {
                  navigate("/testimonials");
                }}
              >
                Testimonials
              </li>
              <li
                className={`nav-hover-clr ${
                  activeNavLink_nav === "/faq-before" && "nav-hover-clr-active"
                }`}
                onClick={() => navigate("/faq-before")}
              >
                FAQ Before
              </li>
              <li
                className={`nav-hover-clr ${
                  activeNavLink_nav === "/faq-after" && "nav-hover-clr-active"
                }`}
                onClick={() => navigate("/faq-after")}
              >
                FAQ After
              </li>
              <li
                className={`nav-hover-clr ${
                  activeNavLink_nav === "/blogs" && "nav-hover-clr-active"
                }`}
                onClick={() => navigate("/blogs")}
              >
                Blogs
              </li>
              <li
                className={`nav-hover-clr ${
                  activeNavLink_nav === "/rejuva-store" &&
                  "nav-hover-clr-active"
                }`}
                onClick={() => navigate("/rejuva-store")}
              >
                Rejuva Store
              </li>
            </ul>
          </li>
        </div>
        <div className="nav-talk-menu">
          <div className="nav-talk">GET A QUOTE</div>
          <div
            className="nav-menu"
            onClick={() => setClosingSideMenu(!closingSideMenu)}
          >
            <IoMenu />
          </div>
        </div>
      </div>
      <div
        className={`nav-side-menu ${
          closingSideMenu ? "nav-side-menu-closing" : ""
        }`}
      >
        <div
          className="nav-side-menu-close"
          style={{ display: closingSideMenu ? "block" : "none" }}
          onClick={() => setClosingSideMenu(!closingSideMenu)}
        >
          <AiFillCloseCircle />
        </div>
        {/* Procedures Dropdown */}
        <li
          className="nav-side-menu-plus "
          onClick={() => {
            toggleDropdown("procedures", proceduresRef);
            navigate("/procedures");
          }}
          // className={`nav-hover-clr ${
          //   activeNavLink_nav === "/" && "nav-hover-clr-active"
          // }`}
        >
          Procedures <FaPlus />
        </li>

        <div
          ref={proceduresRef}
          className={`nav-side-menu-dropdown ${
            dropdownVisible.procedures ? "nav-side-menu-dropdown-show" : ""
          }`}
        >
          {/* Breast Surgery */}
          <li
            className="nav-side-menu-plus"
            onClick={() => toggleSubDropdown("breastSurgery", breastSurgeryRef)}
          >
            <div>
              <MdKeyboardArrowRight />
              Breast Surgery
            </div>
            <FaPlus />
          </li>

          <div
            ref={breastSurgeryRef}
            className={`nav-side-menu-dropdown-002 ${
              subDropdownVisible.breastSurgery
                ? "nav-side-menu-dropdown-002-show"
                : ""
            }`}
          >
            <li>
              <MdKeyboardArrowRight />
              Breast Augmentation
            </li>
            <li>
              <MdKeyboardArrowRight />
              Breast Lift
            </li>
            <li>
              <MdKeyboardArrowRight />
              Breast Reduction
            </li>
            <li>
              <MdKeyboardArrowRight />
              Breast Reduction002
            </li>
          </div>

          {/* Other procedures */}
          <li>
            <MdKeyboardArrowRight />
            Body Surgery
          </li>
          <li>
            <MdKeyboardArrowRight />
            Face Surgery
          </li>
          <li
            className="nav-side-menu-plus"
            onClick={() => toggleSubDropdown("otherProcedures")}
          >
            <div>
              <MdKeyboardArrowRight />
              Other Procedures
            </div>
            <FaPlus />
          </li>
        </div>

        {/* Doctors Dropdown */}
        <li
          className="nav-side-menu-plus"
          onClick={() => {
            toggleDropdown("doctors");
            navigate("/doctors");
          }}
        >
          Doctors <FaPlus />
        </li>

        <div
          className={`nav-side-menu-dropdown ${
            dropdownVisible.doctors ? "nav-side-menu-dropdown-show" : ""
          }`}
        >
          <li>
            <MdKeyboardArrowRight />
            Dr M.Imran Orakzai
          </li>
          <li>
            <MdKeyboardArrowRight />
            Dr Zarak Khan
          </li>
          <li>
            <MdKeyboardArrowRight />
            Dr Ekramuddin
          </li>
        </div>
      </div>
    </>
  );
}

export default Nav;
