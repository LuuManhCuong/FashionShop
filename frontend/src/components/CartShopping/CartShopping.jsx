import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./cartShopping.module.scss";
import CardItems from "../CartItems.jsx/CartItems";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { reloadApiSlector, userSelector } from "../../redux/selectors";
import axios from "axios";

const cx = classNames.bind(styles);

function CardShopping() {
  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;
  const reloadApi = useSelector(reloadApiSlector);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/cart/${user.idUser}`, {
          headers: {
            token: `Bearer ${user.accessToken}`,
          },
        })
        .then((res) => {
          setCartData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user, reloadApi.reload]);

  let total = cartData.reduce((total, item, i) => {
    return (total += item.price * item.inCart);
  }, 0);
  return (
    <div className="shopping-cart-wrap">
      {cartData.length > 0 ? (
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
              {cartData.map((item, i) => (
                <CardItems productItem={item} key={i}></CardItems>
              ))}
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
                <div className={cx("totol-money")}>{total} $</div>
              </div>
              <div className={cx("pay-now")}>Pay Now</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={cx("empty-cart")}>
          <Link className={cx("link")} to={"/shop"}>
            Giỏ hàng trống!!! click vào đây để mua sắm.
            <img
              src="https://www.novelty.com.vn/assets/empty_cart.jpeg"
              alt="img"
            />
          </Link>
        </div>
      )}
    </div>
  );
}

export default CardShopping;
