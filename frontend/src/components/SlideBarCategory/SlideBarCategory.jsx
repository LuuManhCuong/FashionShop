import React from "react";
import classNames from "classnames/bind";
import styles from "./slideBarCategory.module.scss";
const cx = classNames.bind(styles);

function SlideBarCategory({ categories }) {
  return (
    <div className={cx("category")}>
      <h2>Categories</h2>
      <ul>
        {categories.map(function (category, index) {
          return (
            <li key={index}>
              <a href="/">{category}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SlideBarCategory;
