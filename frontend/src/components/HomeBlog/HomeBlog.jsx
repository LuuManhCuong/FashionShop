import React from "react";
import BlogItems from "../BlogItems/BlogItem";
import "./homeBlog.scss";
import { useSelector } from "react-redux";
import { homeDataSelector } from "../../redux/selectors";
import Doremon from "../Doremon/Doremon";
function HomeBlog() {
  const dataHome = useSelector(homeDataSelector);
  // console.log(dataHome.data[2]);
  return (
    <div className="home-blog">
      <h2 className="title">From The Blog</h2>
      <div className="blog-list">
        {dataHome.isLoading ? (
          <Doremon></Doremon>
        ) : (
          <>
            {dataHome.data[2].map((blog, i) => (
              <BlogItems key={i} blogItem={blog}></BlogItems>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default HomeBlog;
