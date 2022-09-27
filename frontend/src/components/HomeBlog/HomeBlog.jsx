import React from "react";
import BlogItems from "../BlogItems/BlogItem";
import "./homeBlog.scss";

function HomeBlog() {
  return (
    <div className="home-blog">
      <h2 className="title">From The Blog</h2>
      <div className="blog-list">
        <BlogItems></BlogItems>
        <BlogItems></BlogItems>
        <BlogItems></BlogItems>
      </div>
    </div>
  );
}

export default HomeBlog;
