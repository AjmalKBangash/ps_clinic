import React, { useState } from "react";
import "./Gallery.css"; // Assume you will style this in CSS

const blogData = [
  {
    id: 1,
    doctor: "Dr Hassan Bangash",
    title: "Liposuction Basics",
    category: "Liposuction",
    content: "Learn about the basics of liposuction.",
    // img: "https://www.plasticsurgery.org/documents/Health-Library/01-liposuction-guide.jpg",
    img: "ps_clinic/ps_clinic001.jpg",
  },
  {
    id: 2,
    doctor: "Dr Janan Orakzai",
    title: "Mommy Makeover Transformation",
    category: "Mommy Makeover",
    content: "The transformative process of a mommy makeover.",
    img: "ps_clinic/ps_clinic002.jpeg",
  },
  {
    id: 3,
    doctor: "Dr Imran Orakzai",
    title: "Top Plastic Surgeons Near You",
    category: "Plastic Surgeons",
    content: "Meet the top plastic surgeons in your area.",
    img: "ps_clinic/ps_clinic003.png",
  },
  {
    id: 4,
    doctor: "Dr Imran Orakzai",
    title: "Guide to Plastic Surgery",
    category: "Plastic Surgery",
    content: "A comprehensive guide to plastic surgery.",
    img: "ps_clinic/ps_clinic002.jpeg",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsFullScreen(true);
  };

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.2);
  };

  const handleZoomOut = () => {
    setZoomLevel(Math.max(1, zoomLevel - 0.2)); // Minimum zoom level is 1
  };

  const handleNext = () => {
    const currentIndex = blogData.findIndex(
      (img) => img.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % blogData.length;
    setSelectedImage(blogData[nextIndex]);
    setZoomLevel(1);
  };

  const handlePrev = () => {
    const currentIndex = blogData.findIndex(
      (img) => img.id === selectedImage.id
    );
    const prevIndex = (currentIndex - 1 + blogData.length) % blogData.length;
    setSelectedImage(blogData[prevIndex]);
    setZoomLevel(1);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setIsFullScreen(false);
    setZoomLevel(1);
  };

  const handleFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleShare = () => {
    navigator
      .share({
        title: selectedImage.title,
        text: selectedImage.content,
        url: selectedImage.img,
      })
      .catch((error) => console.log("Error sharing", error));
  };

  return (
    <div className="gallery-container">
      <div className="image-grid">
        {blogData.map((image) => (
          <div
            key={image.id}
            className="image-item"
            onClick={() => handleImageClick(image)}
          >
            <img src={image.img} alt={image.title} className="gallery-image" />
            <div className="overlay">
              <div className="image-info">
                <h4>{image.category}</h4>
                <p>{image.doctor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isFullScreen && selectedImage && (
        <div className="lightbox">
          <button onClick={handlePrev} className="prev-icon">
            ❮
          </button>
          <button onClick={handleNext} className="next-icon">
            ❯
          </button>
          {/* /////////////////////////////////////////////////////////////////////////// */}
          <div className="controls">
            {/* <button onClick={handlePrev} className="prev-icon">
                ❮
              </button>
              <button onClick={handleNext} className="next-icon">
                ❯
              </button> */}
            <button onClick={handleZoomIn} className="zoom-in">
              🔍+
            </button>
            <button onClick={handleZoomOut} className="zoom-out">
              🔍-
            </button>
            <button
              onClick={handleFullScreenToggle}
              className="fullscreen-icon"
            >
              ⛶
            </button>
            <button onClick={handleShare} className="share-icon">
              📤
            </button>
            <button onClick={handleClose} className="close-icon">
              ✕
            </button>
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////// */}
          <div className="lightbox-content">
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              style={{ transform: `scale(${zoomLevel})` }}
              className="full-screen-image"
            />
            {/* <div className="controls">
              <button onClick={handlePrev} className="prev-icon">
                ❮
              </button>
              <button onClick={handleNext} className="next-icon">
                ❯
              </button>
              <button onClick={handleZoomIn} className="zoom-in">
                🔍+
              </button>
              <button onClick={handleZoomOut} className="zoom-out">
                🔍-
              </button>
              <button
                onClick={handleFullScreenToggle}
                className="fullscreen-icon"
              >
                ⛶
              </button>
              <button onClick={handleShare} className="share-icon">
                📤
              </button>
              <button onClick={handleClose} className="close-icon">
                ✕
              </button>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
