import React from "react";
import "./productItem.scss";
import { Link } from "react-router-dom";
import {
  FavoriteBorder,
  ShoppingCartOutlined,
  HeartBroken,
} from "@mui/icons-material";

function ProductItem({ product }) {
  return (
    <Link to="/shop/detail/1" className="product-item">
      <div className="product-content">
        <img src={product.avatar} alt="product" />
        <div className="label">
          <h4>
            SALE {product.sale}% ({product.gender}/{product.category}) /{" "}
            {product.size}
          </h4>
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
        <p>{product.category}</p>
        <h4 className="name">{product.name}</h4>
        <h3 className="price">
          ${product.price}
          <span>$35.00</span>
        </h3>
      </div>
    </Link>
  );
}

export default ProductItem;
