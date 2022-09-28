import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Comment from "../components/Comment/Comment";
import InputText from "../components/InputText/InputText";

function Product() {
  return (
    <>
      <Header></Header>
      <div className="product-container">
        <div className="sw product-img">viết lung tung</div>
        <div className="sw product-content">viết lung tung</div>
        <div className="sw product-comment">
          <h3 className="title">Đánh giá sản phẩm</h3>
          <InputText></InputText>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
          <Comment></Comment>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Product;
