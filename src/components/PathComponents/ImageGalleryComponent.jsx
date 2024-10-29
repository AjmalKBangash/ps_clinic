import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExpand,
  FaShareAlt,
  FaTimes,
  FaSearchPlus,
} from "react-icons/fa";
import "./ImageGallaryComponent.css"; // Custom styles

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

const ImageGalleryComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
              <FaTimes className="close-btn" onClick={closeModal} />
            </div>
            <img
              src={images[currentImageIndex].img}
              alt={images[currentImageIndex].title}
              className="modal-image"
            />
            <div className="modal-controls">
              <FaArrowLeft className="prev-btn" onClick={prevImage} />
              <FaArrowRight className="next-btn" onClick={nextImage} />
              <FaExpand
                className="zoom-btn"
                onClick={() => alert("Fullscreen activated!")}
              />
              <FaSearchPlus
                className="zoom-btn"
                onClick={() => alert("Zoom functionality triggered!")}
              />
              <FaShareAlt className="share-btn" onClick={handleShare} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryComponent;
