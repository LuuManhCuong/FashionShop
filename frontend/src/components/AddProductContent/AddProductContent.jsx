import React from "react";
import classNames from "classnames/bind";
import styles from "./addProductContent.module.scss";
import AdminHeader from "../AdminHeader/AdminHeader";
import { BusinessCenter } from "@mui/icons-material";

const cx = classNames.bind(styles);

function AddProductContent() {
  return (
    <div className={cx("add-product-container")}>
      <AdminHeader></AdminHeader>
      <div className={cx("wrap")}>
        <h2 className={cx("name")}>Tạo Sản Phẩm Mới</h2>
        <ul className={cx("add-button")}>
          <li>
            <span>
              <BusinessCenter />
            </span>
            <h2>Thêm Nhà Cung Cấp</h2>
          </li>
          <li>
            <span>
              <BusinessCenter />
            </span>
            <h2>Thêm Nhà Cung Cấp</h2>
          </li>
          <li>
            <span>
              <BusinessCenter />
            </span>
            <h2>Thêm Nhà Cung Cấp</h2>
          </li>
        </ul>
        <form action="">
          <div className={cx("input-container")}>
            <form action="" className={cx("input-info-product")}>
              <label htmlFor="">Mã Sản Phẩm </label>
              <input type="text" />
            </form>
            <form action="" className={cx("input-info-product")}>
              <label htmlFor="">Tên Sản Phẩm </label>
              <input type="text" />
            </form>
            <form action="" className={cx("input-info-product")}>
              <label htmlFor="">giới tính </label>
              <select name="" id="">
                <option value=""> nam</option>
                <option value="">nữ</option>
                <option value="">trẻ em</option>
              </select>
            </form>
            <form action="" className={cx("input-info-product")}>
              <label htmlFor="">giá bán </label>
              <input type="text" />
            </form>
            <form action="" className={cx("input-info-product")}>
              <label htmlFor="">giá khuyến mãi </label>
              <input type="text" />
            </form>
            <form action="" className={cx("input-info-product")}>
              <label htmlFor="">giá vốn </label>
              <input type="text" />
            </form>
            <form action="" className={cx("input-info-product")}>
              <label htmlFor="">nhà cung cấp </label>
              <input type="text" />
            </form>
            <form action="" className={cx("input-info-product")}>
              <label htmlFor="">danh mục </label>
              <select name="" id="">
                <option value=""> áo</option>
                <option value="">quần</option>
                <option value="">váy</option>
              </select>
            </form>
            <form action="" className={cx("input-info-product")}>
              <label htmlFor="">ảnh sản phẩm </label>
              <input type="file" />
            </form>
          </div>
          <h5 className={cx("description-name")}>Mô Tả Sản Phẩm</h5>
          <textarea
            className={cx("description")}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" className={cx("submit")} />
        </form>
      </div>
    </div>
  );
}

export default AddProductContent;
