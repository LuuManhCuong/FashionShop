import React from "react";
import classNames from "classnames/bind";
import Action from "../Action/Action";
import styles from "./tableBodyOverView.module.scss";
const cx = classNames.bind(styles);

function TableBodyOverview() {
  return (
    <tr className={cx("wrap")}>
      <td className="">
        <div className={cx("info")}>
          <img
            src="https://cf.shopee.vn/file/32ea51ab59fc1275c9b199584ac43c59"
            alt=""
          />
          <h4>áo sơ mi</h4>
        </div>
      </td>
      <td>20.000</td>
      <td>100</td>
      <td>50</td>
      <td>60%</td>
      <td><Action/></td>
    </tr>
  );
}

export default TableBodyOverview;
