import React, { useEffect } from "react";
import SideBar from "../components/SideBar/SideBar";
import DataCustomer from "../components/DataCustomer/DataCustomer";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import WareHouse from "../components/WareHouse/WareHouse";
import Revenue from "../components/Revenue/Revenue";
import { useSelector } from "react-redux";
import { userSelector } from "../redux/selectors";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const checkUser = useSelector(userSelector);
  const user = checkUser.login?.currentUser;
  // console.log("user: ", checkUser);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      {user?.isAdmin ? (
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
      ) : (
        <h3>ko co giu lieu</h3>
      )}
    </>
  );
}

export default Admin;
