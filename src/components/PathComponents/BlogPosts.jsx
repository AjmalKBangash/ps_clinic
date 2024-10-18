import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./BlogPosts.css";
import BlogCard from "./BlogCard";
import blogData from "./Data";

import "./FaqBefore.css";
import Footer from "../Home/Footer";
import Nav from "../Home/Nav";
import { BiSolidHelpCircle } from "react-icons/bi";
import { BsFillExclamationOctagonFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import ImageGalleryComponent from "./ImageGalleryComponent";
import ImageGallery from "./ImageGallery";
import Gallery from "./Gallery";

const categories = [
  "All",
  "Liposuction",
  "Mommy Makeover",
  "Plastic Surgeons",
  "Plastic Surgery",
  "Recovery after plastic surgery",
  "Tummy Tuck",
  "Hair Transplant",
];

const BlogPosts = () => {
  const { blogTitle } = useParams(); // Access the blogTitle from the URL
  const navigate = useNavigate();
  // Individual posts Logic
  const [indvidualPostData, setIndvidualPostData] = useState(false);
  // Other Logic
  const [posts, setPosts] = useState(blogData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  // Handle search by blog title
  useEffect(() => {
    let filteredPosts = blogData;

    if (searchTerm) {
      filteredPosts = filteredPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory && selectedCategory === "All") {
      setIndvidualPostData(false);
      filteredPosts = blogData;
    } else if (selectedCategory) {
      setIndvidualPostData(false);
      filteredPosts = filteredPosts.filter(
        (post) => post.category === selectedCategory
      );
    }

    setPosts(filteredPosts);
  }, [searchTerm, selectedCategory]);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleClickPage = (page) => setCurrentPage(page);

  // Update URL when individualPostData changes
  useEffect(() => {
    if (indvidualPostData) {
      // Set the new URL with the blog title
      const blogTitle = indvidualPostData.title
        .toLowerCase()
        .replace(/ /g, "-"); // Convert the title into URL-friendly format
      navigate(`/blogs/${blogTitle}`, { replace: true });
    } else {
      // Revert back to the blogs page without any individual post
      navigate("/blogs", { replace: true });
    }
  }, [indvidualPostData, navigate]);

  // Find the blog post based on the URL
  useEffect(() => {
    if (blogTitle) {
      const post = blogData.find(
        (post) => post.title.toLowerCase().replace(/ /g, "-") === blogTitle
      );
      if (post) {
        setIndvidualPostData(post);
      } else {
        // If no post is found, navigate back to the blogs listing page
        navigate("/blogs");
      }
    }
  }, [blogTitle, navigate]);

  return (
    <>
      <Nav />
      <ImageGalleryComponent />
      <hr />
      <br />
      <ImageGallery />
      <hr />
      <br />
      <Gallery />
      <div className="faq-top">
        <div className="faq-first-por blogs-first-por">
          {/* ??//////////////////// */}
          {indvidualPostData ? (
            <>
              <div className="blogs-posts-individual-post" id="individual-post">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span className="blogs-posts-ind-category">
                    {indvidualPostData.category}
                  </span>
                  <span
                    style={{
                      color: "red",
                      fontSize: "20px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                    className="blogs-posts-ind-cross"
                    onClick={() => setIndvidualPostData(false)}
                  >
                    &#10060;
                  </span>
                </div>
                <div className="blogs-posts-ind-title">
                  {indvidualPostData.title}
                </div>
                <div className="blogs-posts-ind-img">
                  <img
                    className="blogs-posts-ind-img"
                    src="ps_clinic/ps_clinic001.jpg"
                    // src={indvidualPostData.img}
                    alt={indvidualPostData.title}
                  />
                </div>
                <div className="blogs-posts-ind-des">
                  {indvidualPostData.content}
                </div>
              </div>
              <div style={{ margin: "8vh 0 0 0" }}>
                <div
                  className="footer-first-por-socials"
                  style={{
                    width: "fit-content",
                  }}
                >
                  <span>Share This</span>
                  <FaFacebook
                    style={{
                      color: "white",
                      borderRadius: "20px",
                      backgroundColor: "#365899",
                      padding: "1.5vh",
                      width: "22px",
                      fontSize: "22px",
                      cursor: "pointer",
                    }}
                    className="footer-first-por-social-icons"
                  />
                  <FaInstagram
                    style={{
                      color: "white",
                      borderRadius: "20px",
                      backgroundColor: "#c1317c",
                      padding: "1.5vh",
                      width: "22px",
                      fontSize: "22px",
                      cursor: "pointer",
                    }}
                    className="footer-first-por-social-icons"
                  />
                  <FaYoutube
                    style={{
                      color: "white",
                      borderRadius: "20px",
                      backgroundColor: "#c4302b",
                      padding: "1.5vh",
                      width: "22px",
                      fontSize: "22px",
                      cursor: "pointer",
                    }}
                    className="footer-first-por-social-icons"
                  />
                  <FaXTwitter
                    style={{
                      color: "white",
                      borderRadius: "20px",
                      backgroundColor: "#00acee",
                      padding: "1.5vh",
                      width: "22px",
                      fontSize: "22px",
                      cursor: "pointer",
                    }}
                    className="footer-first-por-social-icons"
                  />
                </div>
              </div>
              <hr style={{ margin: "4vh 0", color: "#2e8b57" }} />
              <div className="blogs-posts-call-us">Call Us</div>
              <div className="blogs-posts-contact-num">(0092333) 8889768</div>
              <div className="blogs-posts-des">
                Call us or send us your information and we will contact you
                soon.
              </div>
              <div
                className="procedure-visit-link"
                style={{ margin: "auto", width: "fit-content" }}
              >
                <div className="common-visit-link">
                  CONTACT US
                  {/* <FaAngleRight className="common-visit-link-icon" /> */}
                </div>
              </div>
              <hr style={{ margin: "4vh 0", color: "#2e8b57" }} />
            </>
          ) : (
            <></>
          )}
          {/* //////////////////// */}
          {indvidualPostData ? (
            <div className="faq-first-por-title" style={{ margin: "5vh auto" }}>
              You might want to know...
            </div>
          ) : (
            <div className="faq-first-por-title" style={{ margin: "5vh auto" }}>
              BLOG POSTS
            </div>
          )}
          <div className="blog-posts">
            {currentPosts.length ? (
              currentPosts.map((post) => (
                <div
                  className="blogs-card"
                  id={post.id}
                  onClick={() => {
                    setIndvidualPostData(post);
                    document.getElementById("individual-post").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  <div className="procedurecard-img-div">
                    <img
                      src="ps_clinic/ps_clinic001.jpg"
                      // src={post.img}
                      className="procedurecard-img"
                    />
                  </div>
                  <div className="procedurecard-title treatmentcard-title">
                    {post.title}
                  </div>
                  <div className="procedurecard-des">{post.content}</div>
                  <div className="procedurecard-btn">
                    <div className=" blogs-btn blogs-card-btn">
                      Read More
                      <FaArrowRight className="common-btn-icon" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No posts found.</p>
            )}
          </div>
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handleClickPage(index + 1)}
                className={`page-btn ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="faq-first-por-remember">
            <BsFillExclamationOctagonFill className="faq-first-por-remember-icon" />
            <div style={{ fontWeight: "700" }}>
              Remember! If you're interested in publishing your own blog or
              sharing your experience as a patient before and after surgery,
              please reach out to our coordinator or reception.
            </div>
            <div style={{ fontWeight: "700" }}>Thanks!</div>
          </div>
        </div>
        <div className="faq-sec-por">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="blogs-posts-search-bar"
          />
          <div className="faq-sec-por-help">
            <BiSolidHelpCircle className="faq-sec-por-help-icon" />
            CATEGORIES
          </div>
          <div className="faq-sec-por-card">
            {/* ////////////// */}
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`blogs-posts-category-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                // className="category-btn "
              >
                {category}
              </li>
            ))}
            {/* /////////////////// */}
            {/* <li>About Us</li>
              <li>Contact Us</li>
              <li>Fund and Cancellation Policy</li>
              <li>Privacy Policy</li>
              <li>Notice to Patients</li> */}
          </div>
          <div
            style={{
              color: "#2e8b57",
              fontSize: "30px",
              fontWeight: "700",
              margin: "2.5vh 0",
            }}
          >
            Follow Us
          </div>
          <div>
            <div
              className="footer-first-por-socials"
              style={{
                width: "fit-content",
              }}
            >
              <FaFacebook
                style={{
                  color: "white",
                  borderRadius: "20px",
                  backgroundColor: "#365899",
                  padding: "1.5vh",
                  width: "22px",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
                className="footer-first-por-social-icons"
              />
              <FaInstagram
                style={{
                  color: "white",
                  borderRadius: "20px",
                  backgroundColor: "#c1317c",
                  padding: "1.5vh",
                  width: "22px",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
                className="footer-first-por-social-icons"
              />
              <FaYoutube
                style={{
                  color: "white",
                  borderRadius: "20px",
                  backgroundColor: "#c4302b",
                  padding: "1.5vh",
                  width: "22px",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
                className="footer-first-por-social-icons"
              />
              <FaXTwitter
                style={{
                  color: "white",
                  borderRadius: "20px",
                  backgroundColor: "#00acee",
                  padding: "1.5vh",
                  width: "22px",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
                className="footer-first-por-social-icons"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPosts;
