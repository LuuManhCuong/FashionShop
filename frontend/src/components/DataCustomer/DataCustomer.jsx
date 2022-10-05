import React from "react";
import { Table } from "reactstrap";
import "./dataCustomer.scss";
import DataCustomerItem from "../DataCustomerItem/DataCustomerItem";
import AdminHeader from "../AdminHeader/AdminHeader";

const overview = [
  {
    title: "Tất cả khách hàng",
    statistical: 3782,
    subNum: 232,
    isIncrease: true,
    subTitle: "So với tháng trước",
  },
  {
    title: "Số lượt truy cập",
    statistical: 4633,
    subNum: 424,
    isIncrease: true,
    subTitle: "So với tháng trước",
  },
  {
    title: "Tỉ lệ mua hàng",
    statistical: `${50}%`,
    subNum: `${3}%`,
    isIncrease: false,
    subTitle: "So với tháng trước",
  },
];
function DataCustomer() {
  return (
    <div className="data-customer">
      <AdminHeader overview={overview}></AdminHeader>
      <h3>Dữ liệu khách hàng</h3>
      <Table bordered>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>CreatAt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <DataCustomerItem />
          <DataCustomerItem />
          <DataCustomerItem />
          <DataCustomerItem />
          <DataCustomerItem />
        </tbody>
      </Table>
    </div>
  );
}

export default DataCustomer;
