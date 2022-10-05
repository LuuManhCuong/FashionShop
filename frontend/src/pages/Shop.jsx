import React from "react";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
import ProductBlock from "../components/ProductBlock/ProductBlock";

const data = [
  {
    category: "men",
    component: <ProductBlock slug={"men"}></ProductBlock>,
  },

  {
    category: "women",
    component: <ProductBlock slug={"women"}></ProductBlock>,
  },

  {
    category: "kids",
    component: <ProductBlock slug={"kids"}></ProductBlock>,
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
          data={data}
        ></SideBar>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
