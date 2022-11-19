import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CartItem from "../CartItem/CartItem";
import "./cartNoti.scss";
import { useDispatch, useSelector } from "react-redux";
import { reloadApiSlector, userSelector } from "../../redux/selectors";
import { countNoti } from "../../redux/reducer/homeSlice";

function CartNoti({ className }) {
  const dispatch = useDispatch();
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
          dispatch(countNoti.actions.setNotiCart(res.data.length));
          setCartData(res.data);
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, reloadApi.reload]);
  return (
    <div className={className}>
      <div className="product-block">
        {cartData.length > 0 ? (
          cartData.map((product, i) => (
            <CartItem key={i} productItem={product} />
          ))
        ) : (
          <div className="empty-cart">
            <h3 style={{ color: "red" }}>Giỏ hàng trống</h3>
            <img
              src="https://www.novelty.com.vn/assets/empty_cart.jpeg"
              alt="img"
            />
          </div>
        )}
      </div>
      <div className="total">
        <h3>Total: </h3>
        <h3>$240.00</h3>
      </div>
      <Link to={"/cart"} className="view-cart-btn">
        View Cart
      </Link>
    </div>
  );
}

export default CartNoti;
