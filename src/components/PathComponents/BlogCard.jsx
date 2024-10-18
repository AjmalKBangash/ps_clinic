import React from "react";
import "./BlogCard.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <div className="blog-header" style={{ backgroundColor: "#2e8b57" }}>
        <h3>{blog.title}</h3>
        <span className="category" style={{ backgroundColor: "#ff5733" }}>
          {blog.category}
        </span>
      </div>
      <div className="blog-body">
        <p>{blog.content}</p>
      </div>
      <button className="read-more-btn">Read More</button>
    </div>
  );
};

export default BlogCard;
