import React from "react";
import classNames from "classnames/bind";
import styles from "./blogItem.module.scss";
import { Link } from "react-router-dom";

import {
  CalendarTodayOutlined,
  ModeCommentOutlined,
} from "@mui/icons-material";
const cx = classNames.bind(styles);
function BlogItem() {
  return (
    <div className={cx("container")}>
      <img
        className=""
        src="https://preview.colorlib.com/theme/fashi/img/blog/xblog-detail.jpg.pagespeed.ic.yMe25f0qz_.webp"
        alt=""
      />
      <p className={cx("fashion")}>
        fashion
        <span>
          <CalendarTodayOutlined className={cx("icon")}></CalendarTodayOutlined>
          May 19,2021
        </span>
        <span>
          <ModeCommentOutlined className={cx("icon")}></ModeCommentOutlined>7
        </span>
      </p>
      <Link to="/blog/detail/3">
        The Personality Trait That Makes People Happier
      </Link>
      {/* <a href="/blog/detail/3">
        The Personality Trait That Makes People Happier
      </a> */}
      <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam</p>
    </div>
  );
}

export default BlogItem;
