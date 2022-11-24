import React from "react";
import classNames from "classnames/bind";
import Action from "../Action/Action";
import styles from "./tableBodyOverView.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function TableBodyOverview({ product, stt }) {
  return (
    <tr className={cx("wrap")}>
      <td>{stt + 1}</td>
      <td className="">
        <Link to={`/shop/detail/${product.idProduct}`} className={cx("info")}>
          <img src={product.avatar} alt="img" />
          <h4>{product.name}</h4>
        </Link>
      </td>
      <td>
        {product.gender} / {product.category}
      </td>
      <td>{product.size}</td>
      <td>{product.quantity}</td>
      <td>{product.price} $</td>
      <td>{product.sale} %</td>
      <td>{product.price - (product.price / 100) * product.sale} $</td>
      <td>{product.sold || 0}</td>
      <td>{Math.round((product.sold / product.quantity) * 100 * 10) / 10} %</td>
      <td>
        <Action item={product} />
      </td>
    </tr>
  );
}

export default TableBodyOverview;
