import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
import ProductItem from "../components/ProductItem/ProductItem";
import LoadingPage from "../components/LoadingPage/LoadingPage";
function Shop() {
  const categories = ["men", "women", "kids"];

  return (
    <>
      <Header />
      <div className="shopContainer">
        <SideBar
          showPost={false}
          showSearch={false}
          showFilter={true}
          categories={categories}
        ></SideBar>
        <div className="product">
          {/* cân css */}
          <div className="shopProductWrap">
            {/* cân 33% */}
            <div className="shopProduct">
              <ProductItem />
            </div>
            <div className="shopProduct">
              <ProductItem />
            </div>
            <div className="shopProduct">
              <ProductItem />
            </div>
            <div className="shopProduct">
              <ProductItem />
            </div>
            <div className="shopProduct">
              <ProductItem />
            </div>
            <div className="shopProduct">
              <ProductItem />
            </div>
          </div>

          <LoadingPage />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
