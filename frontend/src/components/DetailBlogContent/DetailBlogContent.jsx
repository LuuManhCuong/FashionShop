import classNames from "classnames/bind";
import styles from "./detailBlogContent.module.scss";
import { FacebookOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function DetailBlogContent() {
  const pram = useParams();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fashionshop.onrender.com/blog/detail/${pram.id}`)
      .then((res) => {
        setBlog(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pram.id]);
  return (
    <div className={cx("container")}>
      <div className={cx("title")}>
        <h1 className={cx("name")}>{blog.title}</h1>
        <ul>
          <li>by author</li>
          <li> {blog.createAt}</li>
          <li>8 comments</li>
        </ul>
      </div>
      <img src={blog.image} alt="img" />
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
