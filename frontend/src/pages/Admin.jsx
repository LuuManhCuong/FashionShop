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
    component: <Revenue></Revenue>,
  },

  {
    category: "data customer",
    component: <DataCustomer></DataCustomer>,
  },

  {
    category: "warehouse",
    component: <WareHouse></WareHouse>,
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
