import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
import ProductBlock from "../components/ProductBlock/ProductBlock";

const data = [
  {
    category: "men",
    component: <ProductBlock key={1} slug={"men"}></ProductBlock>,
  },

  {
    category: "women",
    component: <ProductBlock key={2} slug={"women"}></ProductBlock>,
  },

  {
    category: "kids",
    component: <ProductBlock key={3} slug={"kids"}></ProductBlock>,
  },
];

function Shop() {
  return (
    <>
      <Header />
      <div className="shopContainer">
        <SideBar
          showPost={false}
          showSearch={false}
          showFilter={true}
          showTag={false}
          data={data}
        ></SideBar>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
