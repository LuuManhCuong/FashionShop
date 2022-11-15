import React from "react";
import classNames from "classnames/bind";
import styles from "./detailBlogContent.module.scss";
import { FacebookOutlined } from "@mui/icons-material";

import { fetchBlogDetail } from "../../api/api";
import { useState } from "react";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function DetailBlogContent({ id }) {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    fetchBlogDetail(id).then((res) => {
      setBlog(res.data[0]);
    });
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("title")}>
        <h1 className={cx("name")}>{blog.title}</h1>
        <ul>
          <li> {blog.author}</li>
          <li> {blog.createAt}</li>
          <li> 8 comments</li>
        </ul>
      </div>
      <img src={`${blog.image}`} alt="" />
      <div className={cx("info-content")}>
        <div className={cx("share")}>
          <p>share</p>
          <ul>
            <li>
              <a href="/">
                <FacebookOutlined />
              </a>
            </li>
          </ul>
        </div>
        <p className={cx("info")}>{blog.content}</p>
      </div>
    </div>
  );
}

export default DetailBlogContent;
