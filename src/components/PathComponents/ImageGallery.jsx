import React, { useState } from "react";
import "./ImageGallery.css";

const images = [
  {
    id: 1,
    doctor: "Dr Hassan Bangash",
    title: "Liposuction Basics",
    category: "Liposuction",
    content: "Learn about the basics of liposuction.",
    // img: "https://www.plasticsurgery.org/documents/Health-Library/01-liposuction-guide.jpg",
    img: "/ps_clinic/ps_clinic001.jpg",
  },
  {
    id: 2,
    doctor: "Dr Janan Orakzai",
    title: "Mommy Makeover Transformation",
    category: "Mommy Makeover",
    content: "The transformative process of a mommy makeover.",
    img: "/ps_clinic/ps_clinic002.jpeg",
  },
  {
    id: 3,
    doctor: "Dr Imran Orakzai",
    title: "Top Plastic Surgeons Near You",
    category: "Plastic Surgeons",
    content: "Meet the top plastic surgeons in your area.",
    img: "/ps_clinic/ps_clinic003.png",
  },
  {
    id: 4,
    doctor: "Dr Imran Orakzai",
    title: "Guide to Plastic Surgery",
    category: "Plastic Surgery",
    content: "A comprehensive guide to plastic surgery.",
    img: "/ps_clinic/ps_clinic002.jpeg",
  },
];

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const zoomImage = () => {
    const modalImg = document.querySelector(".modal-image");
    modalImg.classList.toggle("zoomed");
  };

  const handleShare = () => {
    const imageUrl = images[currentImageIndex].img;
    navigator.clipboard.writeText(imageUrl);
    alert("Image link copied to clipboard!");
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={image.id}
            onClick={() => openImageModal(index)}
          >
            <img src={image.img} alt={image.title} className="gallery-image" />
            <div className="overlay">
              <div className="overlay-text">
                <p>{image.doctor}</p>
                <p>{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close-btn" onClick={closeModal}>
                &times;
              </button>
            </div>
            <img
              src={images[currentImageIndex].img}
              alt={images[currentImageIndex].title}
              className="modal-image"
            />
            <div className="modal-controls">
              <button className="prev-btn" onClick={prevImage}>
                &#10094;
              </button>
              <button className="next-btn" onClick={nextImage}>
                &#10095;
              </button>
              <button className="zoom-btn" onClick={zoomImage}>
                &#128269;
              </button>
              <button className="share-btn" onClick={handleShare}>
                &#128257;
              </button>
              <button
                className="fullscreen-btn"
                onClick={() => alert("Fullscreen mode")}
              >
                &#9974;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
