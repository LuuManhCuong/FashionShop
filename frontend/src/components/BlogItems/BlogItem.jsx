import React from "react";
import classNames from "classnames/bind";
import styles from "./blogItem.module.scss";
import { Link } from "react-router-dom";

import {
  CalendarTodayOutlined,
  ModeCommentOutlined,
} from "@mui/icons-material";
const cx = classNames.bind(styles);
function BlogItem({ blogItem }) {
  // console.log("blogItem:", blogItem);
  return (
    <Link to={`/blog/detail/${blogItem.idblog}`} className={cx("container")}>
      <img className={cx("blog-img")} src={blogItem.image} alt="img" />
      <p className={cx("fashion")}>
        {blogItem.category || "u bal a"}
        <span>
          <CalendarTodayOutlined className={cx("icon")}></CalendarTodayOutlined>
          20{blogItem.timeCreate}
        </span>
        <span>
          <ModeCommentOutlined className={cx("icon")}></ModeCommentOutlined>7
        </span>
      </p>
      <div className={cx("info")}>
        <p>tags: {blogItem.blogTag}</p>
        <h3>Author: {blogItem.author}</h3>
      </div>

      <h3>{blogItem.title}</h3>

      {/* <a href="/blog/detail/3">
        The Personality Trait That Makes People Happier
      </a> */}
      <p>{blogItem.content}</p>
    </Link>
  );
}

export default BlogItem;
