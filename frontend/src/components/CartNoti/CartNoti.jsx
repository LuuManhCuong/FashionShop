import React from "react";
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
      <button className="view-cart-btn">View Cart</button>
    </div>
  );
}

export default CartNoti;
