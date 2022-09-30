import React from "react";
import classNames from "classnames/bind";
import styles from "./cartShopping.module.scss";
import CardItems from "../CartItems.jsx/CartItems";
const cx = classNames.bind(styles);

function CardShopping() {
  return (
    <div className="card-shopping">
      <div className="card-table">
        <table>
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>PRODUCT NAME</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th>X</th>
            </tr>
          </thead>
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />

        </table>
      </div>
      <div className={cx("card-body")}>
        <div className={cx("discount-code")}>
          <h5>DISCOUNT CODES</h5>
          <form>
            <input
              type="text"
              placeholder="Enter your codes"
              className={cx("discont-code-input")}
            />
            <div>APPLY</div>
          </form>
        </div>
        <div className={cx("totol")}>
          <div className={cx("total-info")}>
            <h5>TOTAL</h5>
            <div className={cx("totol-money")}>20.000</div>
          </div>
          <div className={cx("pay-now")}>Pay Now</div>
        </div>
      </div>
    </div>
  );
}

export default CardShopping;
