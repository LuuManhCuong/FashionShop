import React from "react";
import SideBar from "../components/SideBar/SideBar";
import DataCustomer from "../components/DataCustomer/DataCustomer";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WareHouse from "../components/WareHouse/WareHouse";
import Revenue from "../components/Revenue/Revenue";

const data = [
  {
    category: "Revenue",
    component: <Revenue key={"revenue"}></Revenue>,
  },

  {
    category: "data customer",
    component: <DataCustomer key={"customer"}></DataCustomer>,
  },

  {
    category: "warehouse",
    component: <WareHouse key={"warehouse"}></WareHouse>,
  },
];
function Admin() {
  return (
    <>
      <Header />
      <div className="admin-container">
        <SideBar
          showPost={false}
          showSearch={true}
          showFilter={false}
          data={data}
        />
      </div>
      <Footer />
    </>
  );
}

export default Admin;
