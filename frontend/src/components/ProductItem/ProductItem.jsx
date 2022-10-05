import React from "react";
import "./productItem.scss";
import {Link} from "react-router-dom"
import {
  FavoriteBorder,
  ShoppingCartOutlined,
  HeartBroken,
} from "@mui/icons-material";

function ProductItem() {
  return (
    <Link to="/shop/detail/1" className="product-item">
      <div className="product-content">
        <img
          src="https://preview.colorlib.com/theme/fashi/img/products/xwomen-2.jpg.pagespeed.ic.9lv2o7iXWr.webp"
          alt="product"
        />
        <div className="label">
          <h4>SALE 10%</h4>
        </div>
        <FavoriteBorder className="heart"></FavoriteBorder>
        <ul className="view">
          <li className="icon-wrap">
            <ShoppingCartOutlined className="icon"></ShoppingCartOutlined>
          </li>
          <li className="text">
            <a href="/">+ Quick view</a>
          </li>
          <li className="icon-wrap">
            <HeartBroken className="icon"></HeartBroken>
          </li>
        </ul>
      </div>
      <div className="product-price">
        <p>Coat</p>
        <h4 className="name">Pure pineapple</h4>
        <h3 className="price">
          $34.00
          <span>$35.00</span>
        </h3>
      </div>
    </Link>
    
  );
}

export default ProductItem;
