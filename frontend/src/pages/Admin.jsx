import React from "react";
import SideBar from "../components/SideBar/SideBar";
import DataCustomer from "../components/DataCustomer/DataCustomer";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
function Admin() {
  const categories = [
    "Overview",
    "data customer",
    "something",
    "something",
  ];

  return (
    <>
      <Header />
      <div className="admin-container">
        <SideBar
          showPost={false}
          showSearch={true}
          showFilter={false}
          categories={categories}
        />
        <DataCustomer />
      </div>
      <Footer />
    </>
  );
}

export default Admin;
