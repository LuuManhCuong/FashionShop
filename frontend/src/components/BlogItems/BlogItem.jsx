import React from "react";
import classNames from "classnames/bind";
import styles from "./blogItem.module.scss";
const cx = classNames.bind(styles);
function BlogItem() {
  return (
    <div className={cx("container")}>
      <img
        className=""
        src="https://preview.colorlib.com/theme/fashi/img/blog/xblog-detail.jpg.pagespeed.ic.yMe25f0qz_.webp"
        alt=""
      />
      <a href="/"> The Personality Trait That Makes People Happier</a>
      <p className={cx("fashion")}>
        fashion<span> mon 10/2/2021</span>
      </p>
    </div>
  );
}

export default BlogItem;
