import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./cartNoti.scss";
function CartNoti({className}) {
  return (
    <div className={className}>
      <CartItem />
      <CartItem />
      <div className="total">
        <h3>Total: </h3>
        <h3>$240.00</h3>
      </div>
      <Link to={"/cart"} className="view-cart-btn">View Cart</Link>
    </div>
  );
}

export default CartNoti;
