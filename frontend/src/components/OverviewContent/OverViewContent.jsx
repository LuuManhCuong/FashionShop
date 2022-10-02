import React from "react";

import classNames from "classnames/bind";
import styles from "./overViewContent.module.scss";

import TableBodyOverview from "../TableBodyOverView/TableBodyOverview";
const cx = classNames.bind(styles);

function OverViewContent() {
  return (
    <div className={cx("wrap")}>
      <div className={cx("header")}>
        <div className={cx("header-between")}>
          <h5>Overview</h5>
          <a href="/">Thêm Sản Phẩm Mới</a>
        </div>
        <ul>
          
          <li>
            <div className={cx("header-items")}>
              <h4>Số lượng</h4>
              <p>icon</p>
            </div>
            <h1>18</h1>
            <p className={cx("content-items")}>
              <span>2</span>
              completed
            </p>
          </li>
          <li>
            <div className={cx("header-items")}>
              <h4>Số lượng</h4>
              <p>icon</p>
            </div>
            <h1>18</h1>
            <p className={cx("content-items")}>
              <span>2</span>
              completed
            </p>
          </li>
          <li>
            <div className={cx("header-items")}>
              <h4>Số lượng</h4>
              <p>icon</p>
            </div>
            <h1>18</h1>
            <p className={cx("content-items")}>
              <span>2</span>
              completed
            </p>
          </li>
        </ul>
      </div>
      <div className={cx("body")}>
        <h5 className={cx("body-header")}>Sản Phẩm Trong Cửa Hàng</h5>
        <table>
          <thead>
            <th>Tên Sản Phẩm</th>
            <th>Giá</th>
            <th>Số Lượng</th>
            <th>Số lượng bán</th>
            <th>tỉ lệ</th>
          </thead>
          <tbody className={cx("table-body")}>
            <TableBodyOverview />
            <TableBodyOverview />
            <TableBodyOverview />
            <TableBodyOverview />
            <TableBodyOverview />
            {/* tao khoang cach */}
          </tbody>
          <tfoot className={cx("table-footer")}>
            <tr>
              <td
                style={{
                  textAlign: "center",
                  padding: "10px 0",
                  color: "#637381",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                colSpan={5}
                rowSpan="5"
              >
                {" "}
                xem thêm ---{">"}{" "}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default OverViewContent;
