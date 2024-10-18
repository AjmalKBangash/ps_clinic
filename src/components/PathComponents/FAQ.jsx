import { useState, useRef, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQ.css";

function FAQ({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null); // To reference the content

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight); // Get the content height when open
    } else {
      setHeight(0); // Set height to 0 when closed
    }
  }, [isOpen]);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleFAQ}>
        <span>{data.Question}</span>
        {isOpen ? (
          <FaMinus className="faq-icon" />
        ) : (
          <FaPlus className="faq-icon" />
        )}
      </div>
      <div
        ref={contentRef}
        className="faq-answer"
        style={{
          height: `${height}px`,
          transition: "height 0.3s ease", // Smooth transition for height
          overflow: "hidden",
        }}
      >
        <div className="faq-content">{data.Answer}</div>
      </div>
    </div>
  );
}

export default FAQ;
