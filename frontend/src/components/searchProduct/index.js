import React from "react";
import classNames from "classnames/bind";
import styles from "./searchProduct.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function SearchProduct({ items }) {
  return (
    <div className={cx("wrap")}>
      <Link to={items.to} className={cx("item")}>
        <img src={items.avatar} className={cx("img-product")} alt="" />
        {items.name}
      </Link>
    </div>
  );
}

export default SearchProduct;
