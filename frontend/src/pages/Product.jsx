import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CommentBlock from "../components/CommentBlock/CommentBlock";
import ProductImage from "../components/ProductImage/ProductImage";
function Product() {
  return (
    <>
      <Header></Header>
      <div className="product-container">
        <div className="sw product-img">
          <ProductImage></ProductImage>
        </div>
        <div className="sw product-content">viết lung tung</div>
        <div className="sw product-comment">
          <CommentBlock></CommentBlock>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Product;
