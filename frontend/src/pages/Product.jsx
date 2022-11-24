// import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductImage from "../components/ProductImage/ProductImage";
import ProductInfo from "../components/ProductInfo/ProductInfo";
// import BestSale from "../components/BestSale/BestSale";
import { useDispatch } from "react-redux";
import { getHomeRequest } from "../redux/reducer/homeSlice";
import CommentBlock from "../components/CommentBlock/CommentBlock";
// import axios from "axios"

function Product() {
  const dispatch = useDispatch(); // gọi dữ liệu
  dispatch(getHomeRequest());

  return (
    <>
      <Header></Header>

      <div
        style={{ display: "flex", justifyContent: "center", margin: "40px 0" }}
        class="container-product"
      >
        <ProductImage />
        <ProductInfo />
        <CommentBlock></CommentBlock>
      </div>

      {/* <div style={{}} className="sptt">
        <BestSale gender={"men"}></BestSale>
      </div> */}

      <Footer></Footer>
    </>
  );
}

export default Product;
