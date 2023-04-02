import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./cartShopping.module.scss";
import CardItems from "../CartItems.jsx/CartItems";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { reloadApiSlector, userSelector } from "../../redux/selectors";
import axios from "axios";
import { HOT_URL } from "../../api/api";

const cx = classNames.bind(styles);

function CardShopping() {
  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;
  const reloadApi = useSelector(reloadApiSlector);
  const [cartData, setCartData] = useState([]);

  // dùng hook useEffect và thư viện axios để call api
  useEffect(() => {
    if (user) {
      axios
        // lấy tất cả sản phẩm trong giỏ hàng của user có id = account
        .get(`${HOT_URL}/cart/${user.idUser}`, {
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
        // nếu có sản phẩm thì hiện sau dấu ?
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

              {/* lặp qua cartData và render ra từng sản phẩm tương ứng */}
              {cartData.map((item, i) => (
                // truyền dữ liệu của từng item theo dạng prop  productItem
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
        // nếu ko có sản phẩm thì hiện sau dấu :
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
