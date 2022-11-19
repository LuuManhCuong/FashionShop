// import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductImage from "../components/ProductImage/ProductImage";
import ProductInfo from "../components/ProductInfo/ProductInfo";
// import BestSale from "../components/BestSale/BestSale";
import { useDispatch } from "react-redux";
import { getHomeRequest } from "../redux/reducer/homeSlice";
// import axios from "axios"

function Product() {
  const dispatch = useDispatch();
  dispatch(getHomeRequest());
  // useEffect(() => {
  //   axios.get(`http://localhost:5000/shop/detail/${id}`)
  // } , [])
  return (
    <>
      <Header></Header>

      <div
        class="row g-0"
        style={{ marginTop: "20px", width: "80%", marginLeft: "10%" }}
      >
        <div class="col-sm-6 col-md-7">
          <ProductImage />
        </div>

        <div class="col-6 col-md-5">
          <ProductInfo />
        </div>
      </div>

      {/* <div style={{}} className="sptt">
        <BestSale gender={"men"}></BestSale>
      </div> */}

      <Footer></Footer>
    </>
  );
}

export default Product;
