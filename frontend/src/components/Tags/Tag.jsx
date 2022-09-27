import React from 'react'
import classNames from "classnames/bind";
import styles from "./tag.module.scss";
const cx = classNames.bind(styles);

function Tag() {
  return (
    <div className={cx("product-tag")}>
        <h4>product tags</h4>
        <ul>
          <li>
            <a href="/">dress</a>
          </li>
          <li>
            <a href="/">t-shish</a>
          </li>
          <li>
            <a href="/">short</a>
          </li>
          <li>
            <a href="/">shoes</a>
          </li>
          <li>
            <a href="/">dress2</a>
          </li>
        </ul>
      </div>
  )
}

export default Tag    